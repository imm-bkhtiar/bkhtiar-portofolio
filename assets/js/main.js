const hamburgerBtn = document.querySelector(".navContainer .hamburgerMenu");
const navMenu = document.querySelector(".navContainer .navMenu");
let hiddenTimeOut;

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
