import { slider } from "../../lib/lib.js";
const hamburger = document.querySelector(".hamburger input");
const nav = document.querySelector("nav");
let triggerScroll = window.screenY;

document.addEventListener("click", (e) => {
  if (e.target !== hamburger) {
    hamburger.checked = false;
  }
});

document.addEventListener("scroll", () => {
  if (triggerScroll > window.scrollY) {
    nav.classList.remove("hide");
  } else {
    hamburger.checked = false;
    nav.classList.add("hide");
  }
  triggerScroll = window.scrollY;
});

// ------ Project ------

slider([
  './assets/img/project/1.png',
  './assets/img/project/2.png',
  './assets/img/project/3.png',
  './assets/img/project/4.png'
])
