document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт полностью загружен');

    // Анимация для карточек
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Форма отправлена! (Это демо, данные никуда не отправляются)');
        this.reset();
    });
}

const images = [
    "../images/1.jpg",
    "../images/2.jpg",
    "../images/3.jpg"
];

let current = 0;

function showImage() {
    document.getElementById("mainImage").src = images[current];
}

function nextImage() {
    current = (current + 1) % images.length;
    showImage();
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage();
}
