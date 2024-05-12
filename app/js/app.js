const navBar = document.querySelector("#mainNav");
const hamburgerMenu = document.querySelector("#ham-menu");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("active");
  navBar.classList.toggle("active");
});
