import { slider } from "../../lib/slider.js";
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
slider({
  srcs: [
    "./assets/img/project/1.png",
    "./assets/img/project/2.png",
    "./assets/img/project/3.png",
    "./assets/img/project/4.png",
  ],
  urls: [],
  options: {
    width: "350px",
    gap: ".75rem",
    borderRadius: "10px",
    ratio: "16/9",
    interval: 5000,
    imgPosition: "center",
    center: true,
    shadow:
      "0px 1px 10px 1px  rgba(255, 255, 255, 0.15)",
  },
});

// ------ Skill ------

const skills_level = document.querySelectorAll(
  'section[id="skills"] main .skill_level span',
);

skills_level.forEach((skill_level) => {
  const level = skill_level.getAttribute("level");
  switch (level) {
    case "expert":
      skill_level.style.width = "95%";
      break;
    case "intermediate":
      skill_level.style.width = "65%";
      break;
    case "beginner":
      skill_level.style.width = "35%";
      break;
    default:
      break;
  }
});
