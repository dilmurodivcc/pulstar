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
// Get the icon element
const themeIcon = document.getElementById("theme-icon");

// Function to toggle theme and icon
const toggleTheme = () => {
  // Toggle the 'dark' class on the <body> element
  document.body.classList.toggle("dark");

  // Check if the 'dark' class is present
  if (document.body.classList.contains("dark")) {
    // Change the icon to the sun
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark"); // Save preference
  } else {
    // Change the icon to the moon
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light"); // Save preference
  }
};

// Add event listener to the icon
themeIcon.addEventListener("click", toggleTheme);

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}
