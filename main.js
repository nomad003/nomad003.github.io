(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  var key = "theme";

  function stored() {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function system() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
    if (btn) {
      var toDark = theme !== "dark";
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.setAttribute("aria-label", toDark ? "切换到深色" : "切换到浅色");
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#111113" : "#FBFBFA");
  }

  var params = new URLSearchParams(location.search);
  var query = params.get("theme");
  var saved = stored();
  var initial = query === "light" || query === "dark"
    ? query
    : saved === "light" || saved === "dark"
      ? saved
      : system();
  apply(initial);

  var media = window.matchMedia("(prefers-color-scheme: dark)");
  if (media.addEventListener) {
    media.addEventListener("change", function () {
      if (query === "light" || query === "dark") return;
      var value = stored();
      if (value !== "light" && value !== "dark") apply(system());
    });
  }

  if (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(key, next);
      } catch (e) {}
      apply(next);
    });
  }

  var today = document.getElementById("today");
  if (today) {
    var d = new Date();
    var weeks = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    today.textContent = (d.getMonth() + 1) + "月" + d.getDate() + "日 " + weeks[d.getDay()];
  }

  var links = Array.prototype.slice.call(document.querySelectorAll(".side a.ni"));
  var sections = links.map(function (a) {
    return document.querySelector(a.getAttribute("href"));
  }).filter(Boolean);

  function spy() {
    if (!sections.length) return;
    var line = 120;
    var current = sections[0];
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= line) current = sections[i];
    }
    links.forEach(function (a) {
      var on = current && a.getAttribute("href") === "#" + current.id;
      a.classList.toggle("on", on);
      if (on) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }

  if (sections.length) {
    spy();
    window.addEventListener("scroll", spy, { passive: true });
    window.addEventListener("hashchange", spy);
  }
})();
