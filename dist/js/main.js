// DOM CACHE

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBrand = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");
const homeBtn = document.querySelector("#get-started");
const navClose = document.querySelector(".nav-close");

// Menu State

let menuState = false;

menuBtn.addEventListener("click", showMenu);
homeBtn.addEventListener("click", showMenu);
navClose.addEventListener("click", showMenu);

// showMenu function

function showMenu() {
  if (!menuState) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBrand.classList.add("show");
    menuNav.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));
    menuState = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBrand.classList.remove("show");
    menuNav.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));
    menuState = false;
  }
}
