setInterval(changeBackground, 10000);

function changeBackground() {
    const banner = document.getElementById("#banner");
    const imagem = ['https://i.imgur.com/1g8z9JL.jpg','https://i.imgur.com/7jKZv3B.jpg'];
    const currentIndex = imagem.indexOf(banner.style.backgroundImage.slice(5,-2));
    const nextIndex = (currentIndex + 1) % imagem.length;
    banner.style.backgroundImage = 'url('+ imagem[nextIndex]+')';
}