const hamburgerMenu = document.querySelector('nav .hamburgerMenu');
const menu = document.querySelector('nav .navMenu');
const button = document.querySelector('.hero button');

document.addEventListener('DOMContentLoaded', (ev) => {
  document.querySelectorAll('.navMenu a[href]')
    .forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault()
        const hash = this.getAttribute('href')
        location.replace(hash)
      })
    })
})

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