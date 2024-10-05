const hamburger = document.querySelector(".hamburger input");
const nav = document.querySelector("nav");
let triggerScroll = window.screenY;

document.addEventListener("click", (e) => {
  if (e.target !== hamburger) {
    hamburger.checked = false;
  }
});

document.addEventListener("scroll", (e) => {
  if (triggerScroll > window.scrollY) {
    console.log("scroll up");
    nav.classList.remove("hide");
  } else {
    console.log("scroll down");
    nav.classList.add("hide");
  }
  triggerScroll = window.scrollY;
});
