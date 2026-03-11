// Typing Animation
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Quality Assurance"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Hamburger Menu
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.add('active');
});

closeIcon.addEventListener('click', () => {
    navbar.classList.remove('active');
});

// Close menu when link clicked
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});