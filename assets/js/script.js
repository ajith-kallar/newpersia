"use strict";

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

// Menu Buttons
// Menu buttons
const menuButtons = {
  All: document.getElementById("All"),
  Biriyani: document.getElementById("Biriyani"),
  Beef: document.getElementById("Beef"),
  Chicken: document.getElementById("Chicken"),
  Currys: document.getElementById("Currys")
};

// Menu display UL classes
const displayElements = {
  All: document.getElementById("DisplayAll"),
  Biriyani: document.getElementById("DisplayBiriyani"),
  Beef: document.getElementById("DisplayBeef"),
  Chicken: document.getElementById("DisplayChicken"),
  Currys: document.getElementById("DisplayCurrys")
};

// Function to handle menu item click
function handleMenuClick(menuItem) {
  // Hide all display elements
  Object.values(displayElements).forEach(element => {
    element.style.display = "none";
  });
  
  // Display the selected menu item
  displayElements[menuItem].style.display = "";
}

// Add event listeners for each menu button
Object.values(menuButtons).forEach(button => {
  button.addEventListener("click", () => {
    handleMenuClick(button.id);
  });
});

// Initialize by displaying all items
handleMenuClick("All");








menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}

/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * search box toggle
 */

// const searchBtn = document.querySelector("[data-search-btn]");
// const searchContainer = document.querySelector("[data-search-container]");
// const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
// const searchCloseBtn = document.querySelector("[data-search-close-btn]");

// const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

// for (let i = 0; i < searchBoxElems.length; i++) {
//   searchBoxElems[i].addEventListener("click", function () {
//     searchContainer.classList.toggle("active");
//     document.body.classList.toggle("active");
//   });
// }

/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {
  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});
