const navBar = document.querySelector("#mainNav");
const hamburgerMenu = document.querySelector("#ham-menu");
const buttons = document.querySelectorAll("[data-carousel-button]");
let currentIndex = 0;

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("active");
  navBar.classList.toggle("active");
});

buttons.forEach((button) => {
  const slides = document.querySelectorAll(".slide");
  button.addEventListener("click", function () {
    let offset;
    if (button.classList[1] === "next") {
      offset = 1;
    } else {
      offset = -1;
    }
    currentIndex = eval(currentIndex + offset);
    if (currentIndex < 0) currentIndex = eval(currentIndex + slides.length);
    if (currentIndex >= slides.length) currentIndex = 0;

    let activeSlide;
    slides.forEach((slide) => {
      if (slide.hasAttribute("data-active")) {
        activeSlide = slide;
      } else {
        return;
      }
    });
    slides[currentIndex].setAttribute("data-active", "");
    delete activeSlide.dataset.active;
  });
});
