const navbar = document.getElementById('navbartop');
const navbarOffsetTop = navbar.offsetTop;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY >= navbarOffsetTop) {
        navbar.classList.add('fixed-top');
    } else {
        navbar.classList.remove('fixed-top');
    }
});
