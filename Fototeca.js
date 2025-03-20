let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.photo-slide');
    const totalSlides = slides.length;

    if (!carousel || slides.length === 0) return;

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    // Usamos requestAnimationFrame para una animación más fluida
    requestAnimationFrame(() => {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const leftButton = document.querySelector('.carousel-button.left');
    const rightButton = document.querySelector('.carousel-button.right');

    if (leftButton) {
        leftButton.addEventListener('click', () => moveCarousel(-1));
    }
    if (rightButton) {
        rightButton.addEventListener('click', () => moveCarousel(1));
    }
});
