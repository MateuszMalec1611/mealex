const burgerBtn = document.querySelector('.burger-btn');
const burgerBtnOpen = document.querySelector('.burger-btn__open');
const burgerBtnclose = document.querySelector('.burger-btn__close');
const navMobile = document.querySelector('.nav__box');
const allNavItems = document.querySelectorAll ('.nav__links-item');


function handleClick() {
    navMobile.classList.toggle('nav__box--active');
    burgerBtnOpen.classList.toggle('burger-btn__open--close');
    burgerBtnclose.classList.toggle('burger-btn__close--open');

}

burgerBtn.addEventListener('click', handleClick);