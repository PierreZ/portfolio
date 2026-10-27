// Minimal client-side search over Zola's elasticlunr index, lazy-loaded on
// first interaction with #search so the multi-MB index isn't fetched on
// every page view. URLs for the two library scripts come from this script's
// own tag (id="search-ctl"), set by base.html.
(function () {
  var ctl = document.getElementById("search-ctl");
  var input = document.getElementById("search");
  var out = document.getElementById("search-results");
  var status = document.getElementById("search-status"); // may be missing
  if (!ctl || !input || !out) return;

  var elasticlunrURL = ctl.dataset.elasticlunr;
  var indexURL = ctl.dataset.index;

  var index = null;
  var loading = false;
  var pendingQuery = null; // query typed before the index finished loading

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function setStatus(text) { if (status) status.textContent = text; }

  function setOpen(open) {
    input.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function clearResults() {
    out.innerHTML = "";
    setStatus("");
    setOpen(false);
  }

  function links() { return [].slice.call(out.querySelectorAll("a")); }

  function render(results) {
    if (!results.length) {
      out.innerHTML = '<div class="search-empty">no match</div>';
      setStatus("no results");
      setOpen(true);
      return;
    }
    var shown = results.slice(0, 8);
    setStatus(shown.length + (shown.length === 1 ? " result" : " results"));
    setOpen(true);
    out.innerHTML = results.slice(0, 8).map(function (r) {
      // elasticlunr returns {ref, score}; fetch the stored document by ref.
      var d = index.documentStore.getDoc(r.ref) || {};
      var ex = (d.description || d.body || "").slice(0, 120);
      return '<div class="sr"><a href="' + r.ref + '">' + escapeHtml(d.title || r.ref) +
             '</a><div class="ex">' + escapeHtml(ex) + '</div></div>';
    }).join("");
  }

  function runQuery(q) {
    if (!index) { pendingQuery = q; return; }
    if (q.length < 2) { clearResults(); return; }
    render(index.search(q, { bool: "AND", expand: true }));
  }

  function loadScript(src, cb) {
    var s = document.createElement("script");
    s.src = src;
    s.onload = cb;
    s.onerror = unavailable;
    document.head.appendChild(s);
  }

  // Reset the flag so a later keystroke retries the load.
  function unavailable() {
    loading = false;
    pendingQuery = null;
    setStatus("search unavailable");
  }

  function ensureIndex() {
    if (index || loading) return;
    loading = true;
    loadScript(elasticlunrURL, function () {
      loadScript(indexURL, function () {
        if (typeof elasticlunr === "undefined" || !window.searchIndex) { unavailable(); return; }
        index = elasticlunr.Index.load(window.searchIndex);
        loading = false;
        if (pendingQuery !== null) {
          var q = pendingQuery;
          pendingQuery = null;
          runQuery(q);
        }
      });
    });
  }

  input.addEventListener("focus", ensureIndex);

  var t;
  input.addEventListener("input", function () {
    ensureIndex();
    clearTimeout(t);
    t = setTimeout(function () {
      runQuery(input.value.trim());
    }, 120);
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      clearTimeout(t);
      input.value = "";
      pendingQuery = null;
      clearResults();
    } else if (e.key === "ArrowDown") {
      var l = links();
      if (l.length) { e.preventDefault(); l[0].focus(); }
    }
  });

  out.addEventListener("keydown", function (e) {
    var l = links();
    var i = l.indexOf(document.activeElement);
    if (i === -1) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (i < l.length - 1) l[i + 1].focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (i > 0) l[i - 1].focus(); else input.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      input.focus();
    }
  });

  // Close when focus or a click lands outside the search box. A click on a
  // result stays inside the container, so navigation is not interrupted.
  var box = input.closest ? (input.closest(".nav-search") || out.parentNode) : out.parentNode;
  function closeIfOutside(target) {
    if (!box.contains(target)) clearResults();
  }
  document.addEventListener("mousedown", function (e) { closeIfOutside(e.target); });
  box.addEventListener("focusout", function (e) {
    if (e.relatedTarget) closeIfOutside(e.relatedTarget);
  });
})();
