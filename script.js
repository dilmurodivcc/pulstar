let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide img");
const totalSlides = slides.length;
const indicators = document.querySelectorAll(".indicator");

const slidePattern = [0, 1, 2, 1, 0, 1, 2, 1, 0];
let patternIndex = 0;

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === slidePattern[patternIndex]) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

function showSlide(index) {
  const offset = -index * 768;
  document.querySelector(
    ".carousel-slide"
  ).style.transform = `translateX(${offset}px)`;
  updateIndicators();
}

function nextSlide() {
  patternIndex = (patternIndex + 1) % slidePattern.length;
  currentIndex = slidePattern[patternIndex];
  showSlide(currentIndex);
}

setInterval(nextSlide, 2500);
updateIndicators();

const menu = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
  menuMobile.classList.add("active");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  menuMobile.classList.remove("active");
  document.body.style.overflowY = "auto";
});
