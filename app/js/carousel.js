const backgroundWrapper = document.querySelector("#bgWrapper");
const backgroundWrapper2 = document.querySelector("#bgWrapper2");
const imgThumbnails = document.querySelectorAll("#img-thumbnail");
const imgThumbnails2 = document.querySelectorAll("#img-thumbnail2");
const slides = document.querySelectorAll(".slide");
const slides2 = document.querySelectorAll(".slide2");
const buttons = document.querySelectorAll("[data-carousel-button]");
const carouselOverlay = document.querySelector("#carouselOverlay");
const closeButton = document.querySelector("#closeBtn");

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
    if (slideIsActive) {
      slides2.forEach((slide) => {
        if (slide.hasAttribute("data-active")) {
          activeSlide = slide;
        } else {
          return;
        }
      });
    } else {
      slides.forEach((slide) => {
        if (slide.hasAttribute("data-active")) {
          activeSlide = slide;
        } else {
          return;
        }
      });
    }
    if (slideIsActive) {
      slides2[currentIndex].setAttribute("data-active", "");
    } else {
      slides[currentIndex].setAttribute("data-active", "");
    }
    delete activeSlide.dataset.active;
  });
});

// Carousel buttons when thumbnail image is click//
imgThumbnails.forEach((image, index) => {
  image.addEventListener("click", function () {
    currentIndex = index;
    let activeSlide;
    let activeThumbnail;
    console.log(currentIndex);
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

//For carousel overlay function//
slides.forEach((slide) => {
  slide.addEventListener("click", function () {
    if (!slideIsActive) {
      slideIsActive = true;
      carouselOverlay.style.display = "grid";
      backgroundWrapper2.classList.add("background-wrapper2");
    } else {
      slideIsActive = false;
    }
  });
});

imgThumbnails2.forEach((image, index) => {
  image.addEventListener("click", function () {
    currentIndex = index;
    let activeSlide2;
    let activeThumbnail2;
    console.log(currentIndex);
    slides2.forEach((slide, index) => {
      if (slide.hasAttribute("data-active")) {
        activeSlide2 = slide;
        activeThumbnail2 = imgThumbnails2[index];
      } else {
        return;
      }
    });
    if (slides2[currentIndex].hasAttribute("data-active")) {
      if (currentIndex === 0) {
        imgThumbnails2[currentIndex].classList.add("isclick");
      }
      return;
    } else {
      slides2[currentIndex].setAttribute("data-active", "");
      imgThumbnails2[currentIndex].classList.add("isclick");
      delete activeSlide2.dataset.active;
      activeThumbnail2.classList.remove("isclick");
    }
  });
});

closeButton.addEventListener("click", function () {
  carouselOverlay.style.display = "none";
  backgroundWrapper2.classList.remove("background-wrapper2");
  slideIsActive = false;
});
