const hamburgerBtn = document.querySelector(".navContainer .hamburgerMenu");
const navMenu = document.querySelector(".navContainer .navMenu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburgerBtn.style.animation = "active 0.5s ease";

  setTimeout(() => {
    hamburgerBtn.style.animation = "none";
  }, 500);

  if (!navMenu.classList.contains("active")) {
    hidden();
  }
});

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    navMenu.classList.remove("active");
    hidden();
  }
});

document.addEventListener("scrollend", () => {
  navMenu.parentElement.style.opacity = 1;
  navMenu.parentElement.style.transform = "translateY(0)";
});

const hidden = () => {
  setTimeout(() => {
    if (!navMenu.classList.contains("active")) {
      console.log("berhasil");
      navMenu.parentElement.style.opacity = 0;
      navMenu.parentElement.style.transform = "translateY(100%)";
    }
  }, 5000);
};
