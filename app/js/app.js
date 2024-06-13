const header = document.querySelector("#headerSection");
const navBar = document.querySelector("#mainNav");
const hamburgerMenu = document.querySelector("#ham-menu");
const cartButton = document.querySelector("#cartBtn");
const cardBasket = document.querySelector("#cartBkt");
const itemHandlersButton = document.querySelectorAll("#itemActionButtons");
const itemsCountDisplay = document.querySelector("#numberOfItems");
const numHeaderCartDisplay = document.querySelector("#cartNumDisplay");
const addToCartAButton = document.querySelector("#addToCardBtn");
const cartItems = document.querySelector("#cartFill");
const cartIsEmpty = document.querySelector("#cartEmpty");
const itemCount = document.querySelector("#itemNumber");
const itemTotalPrice = document.querySelector("#itemTotal");
const deleteItemButton = document.querySelector("#deleteItem");

let errorMsg = "Sorry, You can't have 10 items on your cart";
let successMsgCheckOut = "Successfully check out";
let successAddToCart = "Succesffully added to cart";
let quantityNumber = 0;
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
      if (quantityNumber === 0) {
        return;
      } else {
        quantityNumber -= 1;
        itemsCountDisplay.innerText = quantityNumber;
      }
    }
    if (button.hasAttribute("add-item")) {
      quantityNumber += 1;
      itemsCountDisplay.innerText = quantityNumber;
    }
  });
});

addToCartAButton.addEventListener("click", function () {
  numberOfItems = numberOfItems + quantityNumber;
  quantityNumber = 0;
  itemsCountDisplay.innerText = quantityNumber;
  updateCart();
  if (numberOfItems !== 0) {
    showToast(successMsgCheckOut);
  }
});

//Update Card Function //
function updateCart() {
  if (numberOfItems !== 0) {
    numHeaderCartDisplay.innerText = numberOfItems;
    cartIsEmpty.style.display = "none";
    numHeaderCartDisplay.style.display = "grid";
    cartItems.style.display = "grid";
    itemCount.innerText = numberOfItems;
    itemTotalPrice.innerText = `$${numberOfItems * 125}`;
  } else {
    numHeaderCartDisplay.style.display = "none";
    cartItems.style.display = "none";
    cartIsEmpty.style.display = "block";
  }
}

deleteItemButton.addEventListener("click", function () {
  numberOfItems -= 1;
  updateCart();
});

function showToast(msg) {
  let toast = document.createElement("div");
  let toastText = document.createElement("p");
  toastText.innerText = msg;
  toast.appendChild(toastText);
  toast.classList.add("toast-notification");
  document.body.appendChild(toast);
}
