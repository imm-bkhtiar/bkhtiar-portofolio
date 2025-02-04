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
reload().container.prepend(reload().items[reload().items.length - 1]);

let userAgent = navigator.userAgent.toLowerCase();

const autoSlide = () => {
  const container = reload().container;
  const items = reload().items;
  container.scrollLeft += items[0].clientWidth;
  container.addEventListener("scrollend", () => {
    container.appendChild(items[0]);
    if (
      userAgent.includes("chrome") &&
      !userAgent.includes("edg") &&
      !userAgent.includes("opr")
    ) {
      container.scroll({
        left: items[1].clientWidth,
        behavior: "instant"
      })
    }
  });
  setTimeout(() => {
    requestAnimationFrame(autoSlide);
  }, time);
};

requestAnimationFrame(autoSlide);
