const hamburgerBtn = document.querySelector(".navContainer .hamburgerMenu");
const projects = document.querySelectorAll(".container .projects .list a");
const buttonDarkMode = document.querySelector(".container button");
const list = document.querySelector(".container .projects .list");
const navMenu = document.querySelector(".navContainer .navMenu");
const skills = document.querySelectorAll(
  ".container .skills .detail table tbody tr "
);
let hiddenTimeOut;
let intervalautoScroll;
let timeOutAutoScroll;
list.prepend(projects[projects.length - 1]);

const navbarAction = hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburgerBtn.style.animation = "active 0.5s ease";

  setTimeout(() => {
    hamburgerBtn.style.animation = "none";
  }, 500);

  if (!navMenu.classList.contains("active")) {
    hidden();
  }
});

const clickDiluarNavbar = document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    navMenu.classList.remove("active");
    hidden();
  }
});

const touchShow = document.addEventListener("touchend", () => {
  postActionHidden();
});
const scrollShow = document.addEventListener("scroll", () => {
  postActionHidden();
});
const clickAndHidden = navMenu.childNodes.forEach((menu) => {
  menu.addEventListener("click", () => {
    postActionHidden();
  });
});

const hidden = () => {
  if (hiddenTimeOut) {
    clearTimeout(hiddenTimeOut);
  }
  hiddenTimeOut = setTimeout(() => {
    if (!navMenu.classList.contains("active")) {
      navMenu.parentElement.classList.add("hidden");
    }
  }, 5000);
};

const postActionHidden = () => {
  navMenu.parentElement.classList.remove("hidden");
  setTimeout(hidden, 2000);
};

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
