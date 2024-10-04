const projects = document.querySelectorAll(".container .projects .list a");
const buttonDarkMode = document.querySelector(".container button");
const list = document.querySelector(".container .projects .list");
const skills = document.querySelectorAll(
  ".container .skills .detail table tbody tr "
);
let navAutoHidden;
let intervalautoScroll;
let timeOutAutoScroll;
list.prepend(projects[projects.length - 1]);

// New Code
const hamburger = document.querySelector(".hamburger input");
const nav = document.querySelector("nav");
const navMenus = document.querySelectorAll("nav .menu a");

hamburger.addEventListener("change", (e) => {
  clearTimeout(navAutoHidden);
  if (hamburger.checked === false) {
    navAutoHidden = setTimeout(() => {
      nav.classList.add("hidden");
    }, 2000);
  }
});

document.addEventListener("touchend", () => {
  clearTimeout(navAutoHidden);
  nav.classList.remove("hidden");
  navAutoHidden = setTimeout(() => {
    nav.classList.add("hidden");
  }, 5000);
});

// -------------

const autoScroll = () => {
  timeOutAutoScroll = setTimeout(() => {
    list.scrollLeft += 268;
    if (list.scrollLeft === 832) {
      list.scrollLeft = 0;
    }
    clearTimeout(timeOutAutoScroll);
    requestAnimationFrame(autoScroll);
  }, 3000);
};

list.addEventListener("scrollend", (e) => {
  clearInterval(intervalautoScroll);
  if (timeOutAutoScroll) {
    clearTimeout(timeOutAutoScroll);
  }

  if (list.scrollLeft === 0) {
    const remove = list.removeChild(list.children[projects.length - 1]);
    list.prepend(remove);
  } else if (list.scrollLeft >= 564) {
    const remove = list.removeChild(list.children[0]);
    list.appendChild(remove);
  }

  timeOutAutoScroll = setTimeout(() => {
    autoScroll();
  }, 2000);
});

skills.forEach((skill) => {
  const skillRate = skill.children;
  if (skillRate[1].innerText === "Advanced") {
    skillRate[1].style.color = "red";
    skillRate[1].style.fontWeight = "bolder";
  } else if (skillRate[1].innerText === "Intermediate") {
    skillRate[1].style.color = "green";
    skillRate[1].style.fontWeight = "bold";
  } else {
    skillRate[1].style.color = "rgba(74, 150, 106, 0.5)";
  }
});

// Button dark
buttonDarkMode.addEventListener("click", (e) => {
  e.preventDefault();
  if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("light");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.toggle("light");
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", "light");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.add("light");
  }
  document.documentElement.classList.add(localStorage.getItem("theme"));
});
