const hamburgerBtn = document.querySelector(".navContainer .hamburgerMenu");

hamburgerBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".navContainer .hamburgerMenu a");
  const navMenu = document.querySelector(".navContainer .navMenu");
  navMenu.classList.toggle("active");
  hamburgerBtn.style.animation = "active 0.5s ease";
  setTimeout(() => {
    hamburgerBtn.style.animation = "none";
  }, 500);
});
