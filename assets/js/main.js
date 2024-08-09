const hamburgerBtn = document.querySelector(".navContainer .hamburgerMenu");
const navMenu = document.querySelector(".navContainer .navMenu");

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
    if (!window.innerWidth > 768) {
      hidden();
    }
  }
});

const touchShow = document.addEventListener("touchend", () => {
  if (!window.innerWidth > 768) {
    navMenu.parentElement.classList.remove("hidden");
    setTimeout(hidden, 5000);
  }
});

const hidden = () => {
  setTimeout(() => {
    if (!navMenu.classList.contains("active")) {
      console.log("berhasil");
      navMenu.parentElement.classList.add("hidden");
    }
  }, 5000);
};
