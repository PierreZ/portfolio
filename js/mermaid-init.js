// Mermaid diagrams, lazy + theme-aware. The heavy library is vendored (no CDN)
// and only fetched when a .mermaid block approaches the viewport.
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
  var counter = 0;
  var busy = false;
  var again = false;

  // Pull the blueprint/cyanotype palette straight from the site's CSS custom
  // properties, so diagrams use theme "base" with colors matching the page
  // instead of mermaid's built-in "neutral"/"dark" themes (near-black note
  // boxes in light mode, glowing gray subgraphs in dark mode).
  function themeVars() {
    var cs = getComputedStyle(document.documentElement);
    function v(name) { return cs.getPropertyValue(name).trim(); }
    var paper = v("--paper");
    var paper2 = v("--paper-2");
    var ink = v("--ink");
    var inkDim = v("--ink-dim");
    var gridBold = v("--grid-bold");
    return {
      background: paper,
      primaryColor: paper,
      primaryTextColor: ink,
      primaryBorderColor: ink,
      secondaryColor: paper2,
      tertiaryColor: paper2,
      lineColor: inkDim,
      textColor: ink,
      mainBkg: paper,
      nodeBorder: ink,
      clusterBkg: "transparent",
      clusterBorder: gridBold,
      defaultLinkColor: inkDim,
      titleColor: ink,
      edgeLabelBackground: paper,
      actorBkg: paper,
      actorBorder: ink,
      actorTextColor: ink,
      actorLineColor: inkDim,
      signalColor: inkDim,
      signalTextColor: ink,
      labelBoxBkgColor: paper2,
      labelBoxBorderColor: gridBold,
      labelTextColor: ink,
      loopTextColor: inkDim,
      noteBkgColor: paper2,
      noteTextColor: ink,
      noteBorderColor: gridBold,
      activationBkgColor: paper2,
      activationBorderColor: gridBold,
      sequenceNumberColor: paper,
    };
  }

  // Keep the readable source when a diagram fails to parse or render.
  function fallback(n) {
    var pre = document.createElement("pre");
    pre.textContent = n.dataset.src;
    n.innerHTML = "";
    n.appendChild(pre);
    n.style.visibility = "";
  }

  // Render one node into its own SVG. The previous SVG stays in place until the
  // new one is ready, so a theme flip does not flash raw source.
  function renderNode(n) {
    // After read.js restores pristine HTML the node is fresh raw source; stash
    // it the first time we see each element so re-renders always have the source.
    if (!n.dataset.src) n.dataset.src = n.textContent.trim();
    var hasSvg = !!n.querySelector("svg");
    if (!hasSvg) n.style.visibility = "hidden"; // hide raw source while drawing
    var id = "mmd-" + (++counter);
    return Promise.resolve().then(function () {
      return window.mermaid.render(id, n.dataset.src);
    }).then(function (res) {
      n.innerHTML = res.svg;
      n.style.visibility = "";
    }).catch(function () {
      var stray = document.getElementById("d" + id);
      if (stray && stray.parentNode) stray.parentNode.removeChild(stray);
      fallback(n);
    });
  }

  function render() {
    if (!window.mermaid) return;
    if (busy) { again = true; return; }
    var nodes = [].slice.call(document.querySelectorAll(".mermaid"));
    if (!nodes.length) return;
    busy = true;
    // Config reads the live CSS palette, so re-apply on every render (theme flip).
    window.mermaid.initialize({
      startOnLoad: false,
      theme: "base",
      themeVariables: themeVars(),
      securityLevel: "strict",
      fontFamily: "Consolas, ui-monospace, monospace",
      // Render at intrinsic size (not stretched to the full content width); CSS
      // scales it down on narrow screens.
      flowchart: { useMaxWidth: false },
      sequence: { useMaxWidth: false },
    });
    // Sequential: mermaid.render shares global state and is not re-entrant.
    nodes.reduce(function (p, n) {
      return p.then(function () { return renderNode(n); });
    }, Promise.resolve()).then(function () {
      busy = false;
      if (again) { again = false; render(); }
    });
  }

  function ensureLib() {
    if (window.mermaid) { render(); return; }
    if (loading) return;
    loading = true;
    var s = document.createElement("script");
    s.src = libURL;
    s.onload = render;
    s.onerror = function () { loading = false; };
    document.head.appendChild(s);
  }

  // Fetch the 3.3MB library only once a diagram is near the viewport.
  var observer = null;
  function watch() {
    var nodes = [].slice.call(document.querySelectorAll(".mermaid"));
    if (window.mermaid || !("IntersectionObserver" in window)) { ensureLib(); return; }
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          observer.disconnect();
          observer = null;
          ensureLib();
          return;
        }
      }
    }, { rootMargin: "600px 0px" });
    nodes.forEach(function (n) { observer.observe(n); });
  }

  watch();

  // Re-render after the color-theme toggle, and whenever read.js rewrites .prose.
  var flip = document.getElementById("flipbtn");
  if (flip) flip.addEventListener("click", function () { setTimeout(render, 0); });
  // read.js restored raw source into fresh nodes: observe those, not the stale ones.
  document.addEventListener("readmode:changed", function () { setTimeout(window.mermaid ? render : watch, 0); });
})();
