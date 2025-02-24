const createElement = () => {
  return {
    img: document.createElement("img"),
    sliderContainer: document.createElement("div"),
    a: document.createElement("a"),
  };
};

const loadElement = () => {
  return {
    container: document.querySelector(".container[its-b='slider']"),
    imgs: document.querySelectorAll(".container[its-b='slider'] img"),
    links: document.querySelectorAll(".container[its-b='slider'] a"),
  };
};

export function slider({ srcs, urls, options }) {
  const intervalTime = options.interval;
  let index = 1;

  const container = document.querySelector(".container[its-b='slider']");
  container.style.overflowX = "clip";
  container.style.width = options.width;
  container.style.aspectRatio = options.ratio;
  if (options.center) {
    container.style.position = "relative";
    container.style.left = "50%";
    container.style.transform = "translateX(-50%)";
  }

  const sliderContainer = createElement().sliderContainer;
  sliderContainer.style.display = "grid";
  sliderContainer.style.placeItems = "center";
  sliderContainer.style.gridAutoFlow = "column";
  sliderContainer.style.transition = "700ms";

  srcs.forEach((src, i) => {
    const img = createElement().img;
    const a = createElement().a;
    a.setAttribute("href", urls.length === 0 ? "#" : urls[i]);
    a.setAttribute("target", "_blank");
    img.setAttribute("src", src);
    a.appendChild(img);
    sliderContainer.appendChild(a);
    img.style.objectFit = "cover";
    a.style.display = "inline-block";
    a.style.width = options.width;
    a.style.paddingInline = options.gap;
    img.style.width = "100%";
    img.style.aspectRatio = options.ratio;
    img.style.borderRadius = options.borderRadius;
    img.style.objectPosition = options.imgPosition;
    img.style.boxShadow = options.shadow;
  });
  container.appendChild(sliderContainer);
  const links = loadElement().links;

  const firstImgContainer = links[0].cloneNode(true);
  const lastImgContainer = links[links.length - 1].cloneNode(true);

  firstImgContainer.id = "first-img_container";
  lastImgContainer.id = "last-img_container";

  const imgContainerWidth = links[index].clientWidth;

  sliderContainer.prepend(lastImgContainer);
  sliderContainer.append(firstImgContainer);

  sliderContainer.style.transform = `translateX(-${imgContainerWidth * index}px)`;

  const autoSlide = () => {
    setInterval(() => {
      sliderContainer.style.transition = "700ms";
      index++;
      sliderContainer.style.transform = `translateX(-${imgContainerWidth * index}px)`;
    }, intervalTime);
  };

  sliderContainer.addEventListener("transitionend", () => {
    const links = loadElement().links;
    if (links[index].id === firstImgContainer.id) {
      sliderContainer.style.transition = "none";
      index = 1;
      sliderContainer.style.transform = `translateX(-${imgContainerWidth * index}px)`;
    }
  });
  autoSlide();
}
