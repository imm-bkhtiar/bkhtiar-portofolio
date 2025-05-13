export default class Sliders {
  sliderContainer;
  index = 1;
  imgContainerWidth;
  container;
  slide;
  timeout;

  loadAllElement(req) {
    if (req) {
      return document.querySelectorAll(`.container[its='slider'] ${req}`);
    } else {
      return document.querySelector(".container[its='slider']");
    }
  }

  addStyle(style) {
    for (const [css, value] of Object.entries(style)) {
      this.container.style.setProperty(css, value);
    }
  }

  slideNext() {
    const links = this.loadAllElement("a");
    if (this.index >= links.length - 1) return;
    this.addStyle({ "--transition": "700ms" });
    this.index++;
    this.sliderContainer.style.transform = `translateX(-${
      this.imgContainerWidth * this.index
    }px)`;
  }

  slidePrev() {
    const links = this.loadAllElement("a");
    if (this.index <= 0) return;
    this.addStyle({ "--transition": "700ms" });
    this.index--;
    this.sliderContainer.style.transform = `translateX(-${
      this.imgContainerWidth * this.index
    }px)`;
  }

  autoSlide(interval) {
    this.slide = setInterval(() => {
      this.slideNext();
    }, interval);
  }

  cloneAndLoop() {
    const links = this.loadAllElement("a");
    const firstImgContainer = links[0].cloneNode(true);
    const lastImgContainer = links[links.length - 1].cloneNode(true);
    firstImgContainer.id = "first-img_container";
    lastImgContainer.id = "last-img_container";
    this.imgContainerWidth = links[this.index].clientWidth;
    this.sliderContainer.append(firstImgContainer);
    this.sliderContainer.prepend(lastImgContainer);
    this.sliderContainer.style.transform = `translateX(-${
      this.imgContainerWidth * this.index
    }px)`;

    this.sliderContainer.addEventListener("transitionend", () => {
      const links = this.loadAllElement("a");
      if (links[this.index].id === firstImgContainer.id) {
        this.addStyle({ "--transition": "none" });
        this.index = 1;
        this.sliderContainer.style.transform = `translateX(-${
          this.imgContainerWidth * this.index
        }px)`;
      }
      if (links[this.index].id === lastImgContainer.id) {
        this.addStyle({ "--transition": "none" });
        this.index = links.length - 2;
        this.sliderContainer.style.transform = `translateX(-${
          this.imgContainerWidth * this.index
        }px)`;
      }
      this.timeout = false;
    });
  }

  createEachSliderElement(srcs, urls) {
    this.sliderContainer = document.createElement("div");
    this.sliderContainer.classList.add("its_sliderContainer__type1");
    srcs.forEach((src, i) => {
      const img = document.createElement("img");
      const a = document.createElement("a");
      a.setAttribute("href", urls.length === 0 ? "#" : urls[i]);
      a.setAttribute("target", "_blank");
      img.setAttribute("src", src);
      img.setAttribute("alt", "slider_content");
      a.appendChild(img);
      this.sliderContainer.appendChild(a);
    });
  }

  catchRootElement(options) {
    this.container = document.querySelector(".container[its='slider']");
    if (options.center) {
      this.container.style.left = "50%";
      this.container.style.transform = "translateX(-50%)";
    }

    this.addStyle({
      "--img_container_width": options.width,
      "--width": options.width,
      "--padding_inline": options.gap,
      "--aspec_ratio": options.ratio,
      "--border_radius": options.borderRadius,
      "--object_position": options.imgPosition,
      "--box_shadow": options.shadow,
    });
  }

  navigationBtn() {
    const btnN = document.createElement("button");
    const btnP = btnN.cloneNode(true);

    btnN.id = "next";
    btnN.textContent = ">";

    btnP.id = "prev";
    btnP.textContent = "<";

    this.container.appendChild(btnN);
    this.container.appendChild(btnP);

    btnN.addEventListener("click", () => {
      if (this.timeout) return;
      this.timeout = true;
      this.slideNext();
    });

    btnP.addEventListener("click", () => {
      if (this.timeout) return;
      console.log(this.timeout)
      this.timeout = true;
      this.slidePrev();
    });
  }

  mouseEventHandler(options) {
    const btnN = document.getElementById("next");
    const btnP = document.getElementById("prev");
    this.sliderContainer.addEventListener("mouseenter", () => {
      clearInterval(this.slide);
    });
    this.sliderContainer.addEventListener("mouseleave", () => {
      this.autoSlide(options.interval);
    });
    this.sliderContainer.addEventListener("touchmove", () => {
      clearInterval(this.slide);
    });
    this.sliderContainer.addEventListener("touchend", () => {
      this.autoSlide(options.interval);
    });
    btnN.addEventListener("mouseenter", () => {
      clearInterval(this.slide);
    });
    btnP.addEventListener("mouseenter", () => {
      clearInterval(this.slide);
    });
    btnN.addEventListener("touchmove", () => {
      clearInterval(this.slide);
    });
    btnP.addEventListener("touchend", () => {
      this.autoSlide(options.interval);
    });
  }

  sliderType1({ srcs, urls, options }) {
    this.catchRootElement(options);
    this.createEachSliderElement(srcs, urls);
    this.container.appendChild(this.sliderContainer);
    this.cloneAndLoop();
    this.autoSlide(options.interval);
    if (options.navBtn) {
      this.navigationBtn(options);
      this.mouseEventHandler(options);
    }
  }
}
