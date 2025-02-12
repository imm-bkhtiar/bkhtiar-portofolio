const container = document.querySelector(".container[its-b='slider']");
container.style.overflow = "visible";
container.style.width = "350px";
container.style.aspectRatio = "16/9";
container.style.position = 'relative'
container.style.left = '50%'
container.style.transform = 'translateX(-50%)'

const createImageElement = () => {
  return {
    img: document.createElement("img"),
    sliderContainer: document.createElement("div"),
  };
};

const loadElement = () => {
  return {
    container: document.querySelector(".container[its-b='slider']"),
    imgs: document.querySelectorAll(".container[its-b='slider'] img"),
  };
};

export function slider(srcs) {
  const intervalTime = 5000;
  let index = 1;

  const sliderContainer = createImageElement().sliderContainer;
  sliderContainer.style.display = "grid";
  sliderContainer.style.placeItems = "center";
  sliderContainer.style.gridAutoFlow = "column";
  sliderContainer.style.transition = "700ms";

  srcs.forEach((src) => {
    const img = createImageElement().img;
    img.setAttribute("src", src);
    sliderContainer.appendChild(img);
    img.style.scrollSnapAlign = "center";
    img.style.objectFit = "cover";
    img.style.minWidth = "350px";
    img.style.padding = '.25rem'
    img.style.aspectRatio = "16/9";
    img.style.borderRadius = '10px'
  });
  container.appendChild(sliderContainer);
  const imgs = loadElement().imgs;

  const firstImg = imgs[0].cloneNode(true);
  const lastImg = imgs[imgs.length - 1].cloneNode(true);

  firstImg.id = "first-img";
  lastImg.id = "last-img";

  const imgWidth = imgs[index].clientWidth;

  sliderContainer.prepend(lastImg);
  sliderContainer.append(firstImg);

  sliderContainer.style.transform = `translateX(-${imgWidth * index}px)`;

  const autoSlide = () => {
    setInterval(() => {
      sliderContainer.style.transition = "700ms";
      index++;
      sliderContainer.style.transform = `translateX(-${imgWidth * index}px)`;
    }, intervalTime);
  };

  sliderContainer.addEventListener("transitionend", () => {
    const imgs = loadElement().imgs;
    if (imgs[index].id === firstImg.id) {
      sliderContainer.style.transition = "none";
      index = 1;
      sliderContainer.style.transform = `translateX(-${imgWidth * index}px)`;
    }
  });
  autoSlide();
}
