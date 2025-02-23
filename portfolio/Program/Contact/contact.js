const bx = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

bx.addEventListener('click', () => {
    navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
});
