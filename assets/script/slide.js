const slide = document.getElementById("slide");
const container = document.querySelector(".slide-container");
const item = document.querySelectorAll(".slide-item");
const radio = document.querySelectorAll(".radio-slide input");
let currentIndex = 0;

function showNextImage() {
  currentIndex = (currentIndex + 1) % item.length;
  updateSlide();
  updateRadio();
}

function updateSlide() {
  const novaPosicao = -currentIndex * 100 + "%";
  container.style.transform = "translateX(" + novaPosicao + ")";
}

setInterval(showNextImage, 10000);
