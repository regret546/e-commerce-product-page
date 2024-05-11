const navBar = document.querySelector("#mainNav");
const hamburgerMenu = document.querySelector("#ham-menu");
let navBarIsActive = false;

hamburgerMenu.addEventListener("click", function () {
  navBar.style = "animation: left-to-right 1000ms ease-in";
});
