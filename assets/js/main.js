import Slider from "../../lib/Sliders.js";
import Skills_meter from "../../lib/Skills_meter.js";
import Animation from "../../lib/Animation.js";

function hamburgerMenu() {
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
}


// ------ Project ------
const slider = new Slider
const mobileSliderOpts = {
  srcs: [
    "./assets/img/project/freelance_blog_banner.png",
    "./assets/img/project/freelance_company_profile_banner.png",
    "./assets/img/project/freelance_portofolio_banner.png",
  ],
  urls: [],
  options: {
    width: "350px",
    gap: ".75rem",
    borderRadius: "10px",
    ratio: "16/9",
    interval: 5000,
    imgPosition: "center",
    navBtn: false,
    center: true,
    shadow:
      "2.5px 2.5px var(--colorAccent)",
  },
}

const laptopSliderOpts = {
  srcs: [
    "./assets/img/project/freelance_blog_banner.png",
    "./assets/img/project/freelance_company_profile_banner.png",
    "./assets/img/project/freelance_portofolio_banner.png",
  ],
  urls: [],
  options: {
    width: "350px",
    gap: ".75rem",
    borderRadius: "10px",
    ratio: "16/9",
    interval: 5000,
    imgPosition: "center",
    navBtn: false,
    center: true,
    shadow:
      "0px 1px 10px 1px  rgba(255, 255, 255, 0.15)",
  },
}

// ------ Skill ------
const skills = new Skills_meter
const mobileSkillMeterOpts = {
  list: {
    HTML: "Expert",
    CSS: "Expert",
    Javascript: "Expert",
    "Node-Js": "Intermediate",
    PHP: "Junior",
    "My-SQL": "Junior",
  },
  style: {
    gap: "1rem",
    fontSize: "10pt",
    ticknes: "5px",
    border: ".15px solid grey",
    color: "white",
    lineColor: "white",
    linegap: ".5rem",
    hoverAnimation: true,
  }
}

const laptopSkillMeterOpts = {
  list: {
    HTML: "Expert",
    CSS: "Expert",
    Javascript: "Expert",
    "Node-Js": "Intermediate",
    PHP: "Junior",
    "My-SQL": "Junior",
  },
  style: {
    gap: "1rem",
    fontSize: "10pt",
    ticknes: "5px",
    border: ".15px solid grey",
    color: "white",
    lineColor: "white",
    linegap: ".5rem",
    hoverAnimation: true,
  }
}

// ------ Animation ------

const animationOpts = {
  duration: 2000,
  objectDistance: "2rem",
  timingFunction: 'ease-out'
}
const animation = new Animation(animationOpts)
animation.createAnimation()

// doesn't work if using mobile browser, couse that browser has url bar on top.
// it's make the size of heigt change if url bar move above.

/* window.addEventListener('resize', (e) => {
  const screenWidth = window.innerWidth
  if (screenWidth === 360) {
    history.go()
  } else {
    history.go()
  }
}) */

const screenWidth = window.innerWidth
if (screenWidth <= 640) {
  hamburgerMenu()
  slider.sliderType1(mobileSliderOpts);
  skills.createSkillLevel(mobileSkillMeterOpts)
} else {
}
