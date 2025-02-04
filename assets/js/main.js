const hamburger = document.querySelector(".hamburger input");
const nav = document.querySelector("nav");
let triggerScroll = window.screenY;

document.addEventListener("click", (e) => {
  if (e.target !== hamburger) {
    hamburger.checked = false;
  }
});

document.addEventListener("scroll", () => {
  if (triggerScroll > window.scrollY) {
    nav.classList.remove("hide");
  } else {
    hamburger.checked = false;
    nav.classList.add("hide");
  }
  triggerScroll = window.scrollY;
});

// ------ Project ------

const reload = () => {
  return {
    container: document.querySelector("#project main .container"),
    items: document.querySelectorAll("#project main .container a"),
  };
};
const time = 5000;

reload().container.scrollLeft = reload().items[0].clientWidth;

const autoSlide = () => {
  const container = reload().container;
  const items = reload().items;
  container.scrollLeft += items[0].clientWidth;
  container.addEventListener("scrollend", () => {
    container.appendChild(items[0]);
    container.scroll({
      left: items[1].clientWidth,
      behavior: "instant"
    });
  });
  setTimeout(() => {
    requestAnimationFrame(autoSlide);
  }, time);
};

requestAnimationFrame(autoSlide);

let touchPointerStart;
let touchPointerEnd;
reload().container.addEventListener("touchstart", (e) => {
  const currentPointer = e.changedTouches[0].screenX;
  touchPointerStart = currentPointer;
});

reload().container.addEventListener("touchend", (e) => {
  const container = reload().container;
  const items = reload().items;
  const currentPointer = e.changedTouches[0].screenX;
  touchPointerEnd = currentPointer;
  if (touchPointerStart > touchPointerEnd) {
    container.scrollLeft += items[0].clientWidth;
    container.addEventListener("scrollend", () => {
      container.appendChild(items[0]);
      container.scroll({
        left: items[1].clientWidth,
        behavior: "instant",
      });
    });
  } else {
    container.scrollLeft -= items[0].clientWidth;
    container.addEventListener("scrollend", () => {
      container.prepend(items[items.length - 1]);
      container.scroll({
        left: items[1].clientWidth,
        behavior: "instant",
      });
    });
  }
});
