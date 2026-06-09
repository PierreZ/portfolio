// Mermaid diagrams, lazy + theme-aware. The heavy library is vendored (no CDN)
// and only fetched when a page actually contains a .mermaid block.
//
// read.js rewrites .prose innerHTML when the read mode changes (and on load),
// which wipes any SVG we rendered and restores the raw diagram source. So we
// re-query the .mermaid blocks fresh on every render and re-run — and listen for
// read.js's "readmode:changed" event so a quorum/single toggle re-draws the diagram
// instead of leaving raw `flowchart …` text behind.
(function () {
  var self = document.getElementById("mermaid-init");
  if (!self || !document.querySelector(".mermaid")) return;
  var libURL = self.dataset.src;
  var loading = false;

  function themeName() {
    return document.documentElement.getAttribute("data-theme") === "cyanotype"
      ? "dark" : "neutral";
  }

  function render() {
    if (!window.mermaid) return;
    var nodes = [].slice.call(document.querySelectorAll(".mermaid"));
    if (!nodes.length) return;
    nodes.forEach(function (n) {
      // After read.js restores pristine HTML the node is fresh raw source; stash
      // it the first time we see each element so re-renders always have the source.
      if (!n.dataset.src) n.dataset.src = n.textContent.trim();
      n.removeAttribute("data-processed");
      n.innerHTML = n.dataset.src;
    });
    window.mermaid.initialize({
      startOnLoad: false,
      theme: themeName(),
      securityLevel: "strict",
      fontFamily: "Consolas, ui-monospace, monospace",
      // Render at intrinsic size (not stretched to the full content width); CSS
      // scales it down on narrow screens.
      flowchart: { useMaxWidth: false },
      sequence: { useMaxWidth: false },
    });
    try { window.mermaid.run({ nodes: nodes }); } catch (e) {}
  }

  function ensureLib() {
    if (window.mermaid) { render(); return; }
    if (loading) return;
    loading = true;
    var s = document.createElement("script");
    s.src = libURL;
    s.onload = render;
    document.head.appendChild(s);
  }

  ensureLib();

  // Re-render after the color-theme toggle, and whenever read.js rewrites .prose.
  var flip = document.getElementById("flipbtn");
  if (flip) flip.addEventListener("click", function () { setTimeout(render, 0); });
  document.addEventListener("readmode:changed", function () { setTimeout(render, 0); });
})();
