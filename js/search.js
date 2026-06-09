// Minimal client-side search over Zola's elasticlunr index.
// Requires elasticlunr.min.js + search_index.<lang>.js to be loaded first.
(function () {
  var input = document.getElementById("search");
  var out = document.getElementById("search-results");
  if (!input || !out || typeof elasticlunr === "undefined" || !window.searchIndex) return;

  var index = elasticlunr.Index.load(window.searchIndex);

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

  var t;
  input.addEventListener("input", function () {
    clearTimeout(t);
    t = setTimeout(function () {
      var q = input.value.trim();
      if (q.length < 2) { out.innerHTML = ""; return; }
      render(index.search(q, { bool: "AND", expand: true }));
    }, 120);
  });
})();
