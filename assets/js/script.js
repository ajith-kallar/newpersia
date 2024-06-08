"use strict";

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

// Menu Buttons
let menuAll = document.getElementById("All");
let menuBiriyani = document.getElementById("Biriyani");
let menuBeef = document.getElementById("Beef");
let menuChicken = document.getElementById("Chicken");
let menuCurrys = document.getElementById("Currys");

//  Menu display Ul Class
let DisplayAll = document.getElementById("DisplayAll");
let DisplayBiriyani = document.getElementById("DisplayBiriyani");
let DisplayBeef = document.getElementById("DisplayBeef");
let DisplayChicken = document.getElementById("DisplayChicken");
let DisplayCurrys = document.getElementById("DisplayCurrys");

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");
    });
  });
});

menuBiriyani.addEventListener("click", () => {
  DisplayBiriyani.style.display = "";
  DisplayAll.style.display = "none";
  DisplayChicken.style.display = "none";
  DisplayBeef.style.display = "none";
  DisplayCurrys.style.display = "none";
});

menuChicken.addEventListener("click", () => {
  DisplayChicken.style.display = "";
  DisplayAll.style.display = "none";
  DisplayBiriyani.style.display = "none";
  DisplayBeef.style.display = "none";
  DisplayCurrys.style.display = "none";
});

menuBeef.addEventListener("click", () => {
  DisplayBeef.style.display = "";
  DisplayAll.style.display = "none";
  DisplayBiriyani.style.display = "none";
  DisplayChicken.style.display = "none";
  DisplayCurrys.style.display = "none";
});

menuCurrys.addEventListener("click", () => {
  DisplayCurrys.style.display = "";
  DisplayAll.style.display = "none";
  DisplayBiriyani.style.display = "none";
  DisplayChicken.style.display = "none";
  DisplayBeef.style.display = "none";
});

menuAll.addEventListener("click", () => {
  DisplayAll.style.display = "";
  DisplayBeef.style.display = "none";
  DisplayBiriyani.style.display = "none";
  DisplayChicken.style.display = "none";
  DisplayCurrys.style.display = "none";
});







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
