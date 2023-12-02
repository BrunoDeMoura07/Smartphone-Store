const slide = document.getElementById("slide");
const container = document.querySelector(".slide-container");
const items = document.querySelectorAll(".slide-item");
const radios = document.querySelectorAll(".radio-slide input");
let currentIndex = 0;

function showNextImage() {
  currentIndex = (currentIndex + 1) % items.length;
  updateSlide();
}

function updateSlide() {
  const novaPosicao = -currentIndex * 100 + "%";
  container.style.transform = "translateX(" + novaPosicao + ")";
}

setInterval(showNextImage, 6000);
