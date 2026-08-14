// Minimal client-side search over Zola's elasticlunr index, lazy-loaded on
// first interaction with #search so the multi-MB index isn't fetched on
// every page view. URLs for the two library scripts come from this script's
// own tag (id="search-ctl"), set by base.html.
(function () {
  var ctl = document.getElementById("search-ctl");
  var input = document.getElementById("search");
  var out = document.getElementById("search-results");
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

  function render(results) {
    if (!results.length) { out.innerHTML = ""; return; }
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
    if (q.length < 2) { out.innerHTML = ""; return; }
    render(index.search(q, { bool: "AND", expand: true }));
  }

  function loadScript(src, cb) {
    var s = document.createElement("script");
    s.src = src;
    s.onload = cb;
    // Fail silently: leave results empty rather than throw.
    s.onerror = function () {};
    document.head.appendChild(s);
  }

  function ensureIndex() {
    if (index || loading) return;
    loading = true;
    loadScript(elasticlunrURL, function () {
      loadScript(indexURL, function () {
        if (typeof elasticlunr === "undefined" || !window.searchIndex) return;
        index = elasticlunr.Index.load(window.searchIndex);
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
})();
