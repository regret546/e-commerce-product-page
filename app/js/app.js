const header = document.querySelector("#headerSection");
const navBar = document.querySelector("#mainNav");
const hamburgerMenu = document.querySelector("#ham-menu");
const cartButton = document.querySelector("#cartBtn");
const cardBasket = document.querySelector("#cartBkt");
const itemHandlersButton = document.querySelectorAll("#itemActionButtons");
const itemsCountDisplay = document.querySelector("#numberOfItems");
const numHeaderCartDisplay = document.querySelector("#cartNumDisplay");

let numberOfItems = 0;
let slideIsActive = false;
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
    carouselOverlay.style.display = "none";
  } else {
    navBar.classList.remove("transition-enabled");
  }
}

/* Add buttom-border when scrolled */
window.addEventListener("scroll", checkHeight);
function checkHeight() {
  if (window.scrollY > 40) {
    header.classList.add("addBorder");
  } else {
    header.classList.remove("addBorder");
  }
}
handleResize();
window.addEventListener("resize", handleResize);

/* Add to cart function */
itemHandlersButton.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.hasAttribute("remove-item")) {
      if (numberOfItems === 0) {
        return;
      } else {
        numberOfItems -= 1;
        itemsCountDisplay.innerText = numberOfItems;
      }
    }
    if (button.hasAttribute("add-item")) {
      numberOfItems += 1;
      itemsCountDisplay.innerText = numberOfItems;
    }
    if (numberOfItems !== 0) {
      numHeaderCartDisplay.innerText = numberOfItems;
      numHeaderCartDisplay.style.display = "grid";
    } else {
      numHeaderCartDisplay.style.display = "none";
    }
  });
});
