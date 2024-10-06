const hamburger = document.querySelector(".hamburger input");
const nav = document.querySelector("nav");
let triggerScroll = window.screenY;

document.addEventListener("click", (e) => {
  if (e.target !== hamburger) {
    hamburger.checked = false;
  }
});

document.addEventListener("scroll", (e) => {
  if (triggerScroll > window.scrollY) {
    nav.classList.remove("hide");
  } else {
    hamburger.checked = false;
    nav.classList.add("hide");
  }
  triggerScroll = window.scrollY;
});

// ------ Project -------

const galleryContainer = document.querySelector("#project main .container ");
const galleryItems = galleryContainer.querySelectorAll("a");
galleryContainer.prepend(galleryItems[galleryItems.length - 1]);
let noTouch = true;

const autoSlideProject = async () => {
  setTimeout(() => {
    galleryContainer.scrollLeft += galleryItems[0].clientWidth;
    galleryContainer.addEventListener("scrollend", (e) => {
      touch = false;
      const galleryItems = galleryContainer.querySelectorAll("a");
      if (galleryContainer.scrollLeft > galleryItems[0].clientWidth * 2) {
        galleryContainer.appendChild(galleryItems[0]);
      } else if (
        galleryContainer.scrollLeft <
        galleryItems[0].clientWidth - 50
      ) {
        galleryContainer.prepend(galleryItems[galleryItems.length - 1]);
      }
    });
    // galleryContainer.addEventListener("touchend", () => {
    //   console.log(galleryContainer.scrollLeft);
    //   galleryContainer.scrollLeft = 270;
    // });
    requestAnimationFrame(autoSlideProject);
  }, 5000);
};
requestAnimationFrame(autoSlideProject);
