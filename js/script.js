document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const closeMenuBtn = document.querySelector('.close-menu');
    const sideMenu = document.getElementById('sideMenu');
    const navbar = document.getElementById('navbar');
    const logoText = document.getElementById('logoText');

    function toggleMenu() {
        sideMenu.classList.toggle('active');
    }

    menuIcon.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    document.addEventListener('click', (event) => {
        if (
            sideMenu.classList.contains('active') &&
            !sideMenu.contains(event.target) &&
            !menuIcon.contains(event.target)
        ) {
            sideMenu.classList.remove('active');
        }
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shrink');
            logoText.classList.add('hidden');
        } else {
            navbar.classList.remove('shrink');
            logoText.classList.remove('hidden');
        }
    });
});

let currentIndex = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const totalProjects = document.querySelectorAll('.project').length;
    const projectsPerView = 2; // Number of projects visible at a time
    const maxIndex = Math.ceil(totalProjects / projectsPerView) - 1;

    currentIndex += direction;

    // Loop the carousel when reaching the end or beginning
    if (currentIndex < 0) {
        currentIndex = maxIndex;
    } else if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100; // Move by 100% for each view
    carousel.style.transform = `translateX(${offset}%)`;

}

let blogCurrentIndex = 0;

function moveBlogSlide(direction) {
    const carousel = document.querySelector('.blogs-news .carousel');
    const totalBlogs = document.querySelectorAll('.blogs-news .blog-post').length;
    const blogsPerView = 2; // Number of blog posts visible at a time
    const maxIndex = Math.ceil(totalBlogs / blogsPerView) - 1;

    blogCurrentIndex += direction;

    // Loop the carousel when reaching the end or beginning
    if (blogCurrentIndex < 0) {
        blogCurrentIndex = maxIndex;
    } else if (blogCurrentIndex > maxIndex) {
        blogCurrentIndex = 0;
    }

    const offset = -blogCurrentIndex * 100; // Move by 100% for each view
    carousel.style.transform = `translateX(${offset}%)`;
}
