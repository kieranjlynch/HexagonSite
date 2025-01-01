document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle for Mobile Navigation
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !expanded);
        navLinks.classList.toggle('active');
    });

    // Theme Toggle for Dark Mode
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Load saved theme from localStorage
    if(localStorage.getItem('theme') === 'dark'){
        body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        let theme = 'light';
        if(body.classList.contains('dark-mode')){
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });

    // Section Visibility on Scroll using Intersection Observer
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
