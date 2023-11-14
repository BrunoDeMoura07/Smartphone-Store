const bannerImage = document.getElementById("banner-image");
let currentIndex = 0;


bannerImage.addEventListener('load', function() {
    setTimeout(() => {
        bannerImage.classList.remove('fade-in-animation');
    }, 1000);
});

setInterval(changeImage, 11000);

const images = ['./assets/img/banner2.jpg', './assets/img/semanadoconsumidor.png'];

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;

    bannerImage.classList.add('fade-in-animation');

    bannerImage.src = images[currentIndex];
}


