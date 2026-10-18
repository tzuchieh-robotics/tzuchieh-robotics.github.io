// Click-to-zoom for project images
(function () {
  var modal = document.getElementById("image-modal");
  var modalImg = document.getElementById("image-modal-img");

  document.querySelectorAll("img.zoom").forEach(function (img) {
    img.addEventListener("click", function () {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modal.hidden = false;
    });
  });

  function close() { modal.hidden = true; modalImg.src = ""; }
  modal.addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
})();

// Dark mode toggle (defaults to the system setting)
document.querySelectorAll("[data-theme-set]").forEach(function (a) {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    var theme = a.getAttribute("data-theme-set");
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (err) {}
  });
});
