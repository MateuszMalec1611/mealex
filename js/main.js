document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.nav')
    const burgerBtn = document.querySelector('.burger-btn');
    const burgerBtnOpen = document.querySelector('.burger-btn__open');
    const burgerBtnclose = document.querySelector('.burger-btn__close');
    const navMobile = document.querySelector('.nav__box');

    function handleClick() {
        navMobile.classList.toggle('nav__box--active');
        burgerBtnOpen.classList.toggle('burger-btn__open--close');
        burgerBtnclose.classList.toggle('burger-btn__close--open');

    }
    burgerBtn.addEventListener('click', handleClick);



    function addShadow() {
        if (window.scrollY >= 39) {
            nav.classList.add('nav__shadow')
        } else {
            nav.classList.remove('nav__shadow')
        }
    }
    window.addEventListener('scroll', addShadow)
});