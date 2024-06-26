document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.header-slider ul');
    const slides = document.querySelectorAll('.header-slider li');
    const prev = document.querySelector('.control_prev');
    const next = document.querySelector('.control_next');
    let index = 0;

    function showSlide(i) {
        if (i >= slides.length) {
            index = 0;
        } else if (i < 0) {
            index = slides.length - 1;
        } else {
            index = i;
        }
        const offset = -index * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    prev.addEventListener('click', () => showSlide(index - 1));
    next.addEventListener('click', () => showSlide(index + 1));

    setInterval(() => showSlide(index + 1), 5000);

    const navTextElements = document.querySelectorAll('.nav-text');
    navTextElements.forEach(navTextElement => {
        const dropdownIcon = navTextElement.querySelector('img');
        navTextElement.addEventListener('mouseenter', () => {
            dropdownIcon.style.transform = 'rotate(180deg)';
        });
        navTextElement.addEventListener('mouseleave', () => {
            dropdownIcon.style.transform = 'rotate(0deg)';
        });
    });
});

