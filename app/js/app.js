const navBar = document.querySelector("#mainNav");
const hamburgerMenu = document.querySelector("#ham-menu");
const backgroundWrapper = document.querySelector("#bgWrapper");
const buttons = document.querySelectorAll("[data-carousel-button]");
const imgThumbnails = document.querySelectorAll("#img-thumbnail");
const slides = document.querySelectorAll(".slide");
let navbarIsActive = false;
let currentIndex = 0;

// Hamburger menu drop down //
hamburgerMenu.addEventListener("click", function () {
  if (!navbarIsActive) {
    navbarIsActive = true;
  } else {
    navbarIsActive = false;
  }
  hamburgerMenu.classList.toggle("active");
  navBar.classList.toggle("active");

  if (!navbarIsActive) {
    backgroundWrapper.classList.remove("background-wrapper");
  } else {
    backgroundWrapper.classList.add("background-wrapper");
  }
});

// Carousel buttons when click and what image will display base on the buttons click//
// Works only for mobile carousel//
buttons.forEach((button) => {
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

// Carousel buttons when thumbnail image is click//
imgThumbnails.forEach((image, index) => {
  image.addEventListener("click", function () {
    currentIndex = index;
    let activeSlide;
    let activeThumbnail;
    slides.forEach((slide) => {
      if (slide.hasAttribute("data-active")) {
        activeSlide = slide;
      } else {
        return;
      }
    });
    if (slides[currentIndex].hasAttribute("data-active")) {
      return;
    } else {
      slides[currentIndex].setAttribute("data-active", "");
      delete activeSlide.dataset.active;
    }
  });
});

// Disable transition when resize down//
function handleResize() {
  if (window.innerWidth < 700) {
    navBar.classList.add("transition-enabled");
  } else {
    navBar.classList.remove("transition-enabled");
  }
}

handleResize();

window.addEventListener("resize", handleResize);
