// Read-mode controller. The cluster always has exactly one silently-faulty
// replica F (rolled once per load). The read mode decides what you actually see:
//
//   quorum (R=2, default): read the majority. The two honest replicas agree, F is
//     out-voted and read-repaired. Two nodes glow cyan, F shows amber "repairing",
//     the content is clean, checksums match.
//
//   single (R=1): read one replica and land on F. Corrupted blocks, no cross-check,
//     no healing. F glows red, a few words get scrambled (typoglycemia — first &
//     last letter kept, so it stays readable), the console reports a checksum
//     mismatch, the footbar degrades. This is the rot quorum reads were hiding.
//
// Supersedes render.js (node pick) + chaos.js (corruption): they raced over the
// same .cluster nodes, so one controller now owns the whole read state. The mode
// persists for the session (sessionStorage); F re-rolls each load (a failing disk is not deterministic).
(function () {
  var script = document.getElementById("read-ctl");
  var cluster = document.querySelector(".cluster");
  var nodes = [].slice.call(document.querySelectorAll(".cluster .node"));
  var btn = document.getElementById("readbtn");

  // 404: the whole replica set is down (cluster--down) — leave it as-is.
  if (cluster && cluster.classList.contains("cluster--down")) return;
  if (!nodes.length && !btn) return;

  var ENABLED = !script || script.dataset.enabled !== "false";
  var DEFAULT = (script && script.dataset.defaultMode) || "quorum";
  var KEY = "bp-read";
  // Older versions persisted the mode in localStorage; drop it so returning
  // visitors start in the default mode.
  try { localStorage.removeItem(KEY); } catch (e) {}
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Roll the cluster state once per load (a failing disk is not deterministic):
  //   F            — which replica has the corrupt disk
  //   quorumSet    — the two replicas this load's quorum read happens to contact
  //   singleTarget — the one replica this load's single read happens to hit
  // Repairs and corruption are therefore *probabilistic*: a quorum read only
  // repairs F when F is one of the two it read; a single read only serves rot when
  // it lands on F. Most pages look fine — reload to re-roll. That's the point.
  var N = nodes.length || 3;
  function shuffled() {
    var a = [], i; for (i = 0; i < N; i++) a.push(i);
    for (i = N - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  var F = Math.floor(Math.random() * N);
  var quorumSet = shuffled().slice(0, 2).sort(function (a, b) { return a - b; });
  var singleTarget = Math.floor(Math.random() * N);
  var quorumRepair = quorumSet.indexOf(F) !== -1; // did the quorum read touch the bad disk?
  var singleCorrupt = singleTarget === F;          // did the single read land on it?

  var roots = [].slice.call(document.querySelectorAll(".hero, .bom, .prose, .article .title"));
  var consoleOut = document.getElementById("console-out");
  var readCmd = document.getElementById("read-cmd");
  var cmdTarget = readCmd ? (readCmd.dataset.target || "") : "";

  // Pristine snapshots, captured once so quorum restores byte-for-byte.
  var pristine = roots.map(function (r) { return r.innerHTML; });
  var dirty = false; // true while the roots hold a corrupted render (needs a restore)

  function escapeHtml(s) {
    return s.replace(/[&<>]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c];
    });
  }

  // Typoglycemia: keep first/last letter, shuffle the middle. Re-shuffle until the
  // result differs (a random shuffle can reproduce the input); returns unchanged if
  // it can't differ (e.g. "feel"), and the caller then leaves it uncorrupted.
  function typoglyce(word) {
    if (word.length < 4) return word;
    var mid = word.slice(1, -1).split("");
    var original = mid.join("");
    for (var attempt = 0; attempt < 12; attempt++) {
      for (var i = mid.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = mid[i]; mid[i] = mid[j]; mid[j] = t;
      }
      if (mid.join("") !== original) break;
    }
    return word.charAt(0) + mid.join("") + word.charAt(word.length - 1);
  }

  var RATE = 0.05; // ~5% of words corrupted, spread across the whole region
  var MIN = 3, MAX = 20;

  // Scramble words spread uniformly across one region. Re-rolled each call.
  function corrupt(root) {
    if (reduced) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        for (var p = n.parentNode; p && p !== root; p = p.parentNode) {
          var t = p.tagName;
          if (t === "PRE" || t === "CODE") return NodeFilter.FILTER_REJECT;
          if (p.classList && (p.classList.contains("toc") || p.classList.contains("mermaid"))) return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var textNodes = [], n;
    while ((n = walker.nextNode())) textNodes.push(n);

    var split = [], cands = [];
    for (var i = 0; i < textNodes.length; i++) {
      var parts = textNodes[i].nodeValue.split(/(\s+)/);
      split[i] = parts;
      for (var j = 0; j < parts.length; j++) {
        if (/^[A-Za-z]{4,}$/.test(parts[j])) cands.push([i, j]);
      }
    }
    if (!cands.length) return;

    var total = Math.min(Math.max(Math.round(cands.length * RATE), MIN), MAX);
    total = Math.min(total, cands.length);
    for (var k = 0; k < total; k++) {
      var r = k + Math.floor(Math.random() * (cands.length - k));
      var tmp = cands[k]; cands[k] = cands[r]; cands[r] = tmp;
    }
    var touched = {};
    for (var c = 0; c < total; c++) {
      var ni = cands[c][0], pj = cands[c][1];
      var scrambled = typoglyce(split[ni][pj]);
      if (scrambled === split[ni][pj]) continue; // couldn't differ — leave it clean
      // Scrambled copy is hidden from assistive tech and selection; the original
      // word stays readable for screen readers and copy/paste.
      split[ni][pj] = '<span class="rot" aria-hidden="true">' + escapeHtml(scrambled) +
                      '</span><span class="sr-only">' + escapeHtml(split[ni][pj]) + "</span>";
      touched[ni] = true;
    }
    for (var idx in touched) {
      var p2 = split[idx];
      for (var m = 0; m < p2.length; m++) {
        if (p2[m].charAt(0) !== "<") p2[m] = escapeHtml(p2[m]);
      }
      var span = document.createElement("span");
      span.innerHTML = p2.join("");
      textNodes[idx].parentNode.replaceChild(span, textNodes[idx]);
    }
  }

  function nodeIndex(el) {
    var c = (el.getAttribute("class") || "").match(/\bn(\d)\b/);
    return c ? parseInt(c[1], 10) : 0;
  }
  function mark(idx, cls) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodeIndex(nodes[i]) === idx) nodes[i].classList.add(cls);
    }
  }
  function label(i) { return "n" + i; }

  // Wide code blocks need keyboard focus to be scrollable. Runs after any
  // innerHTML restore so the attribute is not wiped.
  function markScrollable() {
    var pres = document.querySelectorAll(".prose pre");
    for (var i = 0; i < pres.length; i++) {
      if (pres[i].scrollWidth > pres[i].clientWidth) pres[i].setAttribute("tabindex", "0");
    }
  }

  function render(mode) {
    var single = mode === "single";
    var repair = ENABLED && quorumRepair;
    var corrupted = single && ENABLED && singleCorrupt;

    for (var i = 0; i < nodes.length; i++) {
      nodes[i].classList.remove("active", "repairing", "failed");
    }
    if (single) {
      if (corrupted) mark(F, "failed");
      else mark(singleTarget, "active");
    } else {
      for (var q = 0; q < quorumSet.length; q++) {
        mark(quorumSet[q], (ENABLED && quorumSet[q] === F) ? "repairing" : "active");
      }
    }

    if (readCmd) {
      readCmd.textContent = single
        ? "./read --replica " + label(singleTarget) + " " + cmdTarget
        : "./read --quorum " + cmdTarget;
    }
    if (consoleOut) {
      if (single) {
        consoleOut.innerHTML = corrupted
          ? '<span class="warn">✗</span> single read R=1 · node ' + label(F) + ' · checksum mismatch'
          : '<span class="ok">✓</span> single read R=1 · node ' + label(singleTarget) + ' · unverified';
      } else {
        var ns = label(quorumSet[0]) + ',' + label(quorumSet[1]);
        consoleOut.innerHTML = repair
          ? '<span class="ok">✓</span> quorum read R=2 · nodes ' + ns + ' · ' + label(F) + ' corrupted → read-repaired'
          : '<span class="ok">✓</span> quorum read R=2 · nodes ' + ns + ' · checksums match';
      }
    }

    // Only touch the DOM when it differs from pristine: either a previous
    // corrupted render must be undone, or this one is corrupted. Skipping the
    // restore keeps images, iframes, diagrams and the #anchor scroll intact.
    if (dirty || corrupted) {
      for (var r = 0; r < roots.length; r++) {
        roots[r].innerHTML = pristine[r];
        if (corrupted) corrupt(roots[r]);
      }
      dirty = corrupted;
      // We just rewrote .prose innerHTML, tell mermaid-init to re-draw any diagrams
      // (the restore wiped their rendered SVG back to raw source text).
      document.dispatchEvent(new Event("readmode:changed"));
    }
    markScrollable();

    if (btn) {
      btn.textContent = single ? "read: single" : "read: quorum";
      btn.classList.toggle("single", single);
      btn.removeAttribute("aria-pressed"); // visible text already carries the state
      btn.title = single ? "switch to quorum read (R=2)" : "switch to single read (R=1)";
    }
    document.body.classList.toggle("read-single", single);
  }

  var mode = DEFAULT;
  if (ENABLED) {
    try { mode = sessionStorage.getItem(KEY) || DEFAULT; } catch (e) {}
  }
  if (mode !== "single" && mode !== "quorum") mode = DEFAULT;
  if (!ENABLED) mode = "quorum";

  render(mode);

  if (ENABLED) {
    document.body.classList.add("read-armed"); // CSS shows the cluster as clickable
    function toggle() {
      mode = (mode === "single") ? "quorum" : "single";
      try { sessionStorage.setItem(KEY, mode); } catch (e) {}
      render(mode);
    }
    if (btn) btn.addEventListener("click", toggle);
    var cell = document.querySelector(".cluster-cell");
    if (cell) {
      cell.title = "click to switch read mode";
      cell.addEventListener("click", toggle);
    }
  }
})();
