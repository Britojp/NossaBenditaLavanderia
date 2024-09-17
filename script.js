let slideIndex = 0;

function mudarSlide(n) {
    const slides = document.querySelectorAll('.avaliacao');
    const totalSlides = slides.length;
    const visibleSlides = 3;

    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    const carrossel = document.querySelector('.carrossel');
    carrossel.style.transform = `translateX(${-slideIndex * (100 / visibleSlides)}%)`;
}

document.addEventListener('DOMContentLoaded', () => mudarSlide(0));


let ul = document.querySelector('nav ul');

function openMenu(){
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open');
}