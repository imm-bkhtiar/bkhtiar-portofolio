const hamburgerMenu = document.querySelector('nav .hamburgerMenu');
const menu = document.querySelector('nav .navMenu');
const button = document.querySelector('.hero button');

hamburgerMenu.addEventListener('click', function (e) {
  menu.classList.toggle('active')
  hamburgerMenu.classList.toggle('active')
  e.preventDefault()
});


document.addEventListener('click', function (e) {
  if (!hamburgerMenu.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('active')
    hamburgerMenu.classList.remove('active')
  }
})