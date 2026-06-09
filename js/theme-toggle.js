// Color-theme toggle: blueprint (light) <-> cyanotype (dark).
// The initial theme is set inline in <head> (no flash). This file wires the
// button, persists the choice, and switches the active syntax stylesheet.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("flipbtn");

  function apply(theme) {
    var dark = theme === "cyanotype";
    root.setAttribute("data-theme", theme);
    var l = document.getElementById("syntax-light");
    var d = document.getElementById("syntax-dark");
    if (l) l.disabled = dark;
    if (d) d.disabled = !dark;
    if (btn) btn.textContent = dark ? "⊕ light" : "⊕ dark";
  }

  // Sync button label with whatever the inline script already chose.
  apply(root.getAttribute("data-theme") || "blueprint");

  if (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "blueprint" ? "cyanotype" : "blueprint";
      try { localStorage.setItem("bp-theme", next); } catch (e) {}
      apply(next);
    });
  }
})();
