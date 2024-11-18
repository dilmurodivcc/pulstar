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
const themeIcon = document.getElementById("theme-icon");

const toggleTheme = () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark"); 
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light"); 
  }
};

themeIcon.addEventListener("click", toggleTheme);

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

AOS.init();
AOS.init({
  duration: 1800,
});
  const customCursor = document.querySelector(".custom-cursor");

  document.addEventListener("mousemove", (e) => {
    const smoke = document.createElement("div");
    smoke.classList.add("tutun");

    smoke.style.left = `${e.pageX}px`;
    smoke.style.top = `${e.pageY}px`;

    document.body.appendChild(smoke);

    setTimeout(() => {
      smoke.style.opacity = "0";
    }, 100);

    setTimeout(() => {
      smoke.remove();
    }, 550);
  });
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});