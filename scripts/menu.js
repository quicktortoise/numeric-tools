(function () {
  const menu = document.querySelector("header nav");

  document.querySelector("header button.menu-toggle")
    .addEventListener("click", () => menu.classList.toggle("mobile-hidden-menu"));

  window.addEventListener("resize", () => {
    if (!menu.classList.contains("mobile-hidden-menu")) {
      menu.classList.add("mobile-hidden-menu");
    }
  });
})();
