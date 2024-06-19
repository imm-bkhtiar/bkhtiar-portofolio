const hamburgerMenu = document.querySelector('nav .hamburgerMenu');
const menu = document.querySelector('nav .navMenu');
const button = document.querySelector('.hero button');
const imgProfile = document.querySelector('.hero .containerImg img');
const containerProfileImg = document.querySelector('.hero .containerImg')
const imgProfilePath = [
  'img/profilePictures/picture1.jpg',
  'img/profilePictures/picture2.jpg',
  'img/profilePictures/picture3.jpg',
  'img/profilePictures/picture4.jpg',
  'img/profilePictures/picture5.jpg',
  'img/profilePictures/picture6.jpg'];
let i = 0;

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

setInterval(() => {
  i++
  if (i === imgProfilePath.length) {
    i = 0
  }
  const newImg = document.createElement('img');
  newImg.src = imgProfilePath[i]
  newImg.className = "fadeOut"
  containerProfileImg.appendChild(newImg)
}, 5000)