/**
 * Theming (overrides the theme's main.js).
 *
 * Dark is the default regardless of OS preference; the toggle switches to
 * light and remembers the choice in localStorage. The initial attribute is set
 * by an inline script in extra-head.html to avoid a flash.
 */
(function () {
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
  }

  apply(stored() === "light" ? "light" : "dark");

  var toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  toggle.setAttribute("role", "button");
  toggle.setAttribute("tabindex", "0");
  toggle.setAttribute("aria-label", "Toggle light/dark theme");

  function flip() {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", next); } catch (e) {}
    apply(next);
  }

  toggle.addEventListener("click", flip);
  toggle.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); }
  });
})();
