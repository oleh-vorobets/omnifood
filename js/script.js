// Adding current year
const yearHtmlElement = document.querySelector('.current-year');
yearHtmlElement.textContent = new Date().getFullYear();

// Making burger menu available
const headerHtmlHeader = document.querySelector('.header');

const burgerHtmlBtn = document.querySelector('.btn-mobile-nav');

burgerHtmlBtn.addEventListener('click', () => {
    headerHtmlHeader.classList.toggle('nav-open');
});

// Smooth animation
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');

        // Scroll
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        } else {
            const section = document.querySelector(href);
            section.scrollIntoView({ behavior: 'smooth' });
        }

        if (headerHtmlHeader.classList.contains('nav-open')) {
            headerHtmlHeader.classList.remove('nav-open');
        }
    });
});
