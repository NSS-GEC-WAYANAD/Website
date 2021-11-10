const hamburger = document.getElementById('hamburger');
const nav_bg = document.getElementById('nav_bg');
const nav_links = document.getElementById('nav_links');

document.querySelectorAll('a[href^="#btn"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

hamburger.addEventListener("click", () => {
    nav_bg.classList.toggle("open");
    nav_links.classList.toggle("open");
    hamburger.classList.toggle("open");
});