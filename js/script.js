const hamburger = document.getElementById('hamburger');
const nav_bg = document.getElementById('nav_bg');
const nav_links = document.getElementById('nav_links');

hamburger.addEventListener("click", () => {
    nav_bg.classList.toggle("open");
    setTimeout(function() {
        nav_links.classList.toggle("open");
        hamburger.classList.toggle("open");
    }, 100);
});