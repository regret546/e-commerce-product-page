const header = document.querySelector("#headerSection");
const navBar = document.querySelector("#mainNav");
const hamburgerMenu = document.querySelector("#ham-menu");
const backgroundWrapper = document.querySelector("#bgWrapper");
const buttons = document.querySelectorAll("[data-carousel-button]");
const imgThumbnails = document.querySelectorAll("#img-thumbnail");
const slides = document.querySelectorAll(".slide");
const cartButton = document.querySelector("#cartBtn");
const cardBasket = document.querySelector("#cartBkt");
let cartIsActive = false;
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
    slides.forEach((slide, index) => {
      if (slide.hasAttribute("data-active")) {
        activeSlide = slide;
        activeThumbnail = imgThumbnails[index];
      } else {
        return;
      }
    });
    if (slides[currentIndex].hasAttribute("data-active")) {
      if (currentIndex === 0) {
        imgThumbnails[currentIndex].classList.add("isclick");
      }
      return;
    } else {
      slides[currentIndex].setAttribute("data-active", "");
      imgThumbnails[currentIndex].classList.add("isclick");
      delete activeSlide.dataset.active;
      activeThumbnail.classList.remove("isclick");
    }
  });
});

//Cart function//
cartButton.addEventListener("click", function () {
  if (!cartIsActive) {
    cardBasket.style.display = "flex";
    cartIsActive = true;
  } else {
    cardBasket.style.display = "none";
    cartIsActive = false;
  }
});

// Disable transition when resize down//
function handleResize() {
  if (window.innerWidth < 700) {
    navBar.classList.add("transition-enabled");
  } else {
    navBar.classList.remove("transition-enabled");
  }
}

/* Add buttom-border when scrolled */
window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 100) {
    header.classList.add("addBorder");
  } else {
    header.classList.remove("addBorder");
  }
}

handleResize();

window.addEventListener("resize", handleResize);
