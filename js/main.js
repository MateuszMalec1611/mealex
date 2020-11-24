document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.nav');
    const navBox = document.querySelector('.nav__box');
    const burgerBtn = document.querySelector('.burger-btn');
    const burgerBtnOpen = document.querySelector('.burger-btn__open');
    const burgerBtnclose = document.querySelector('.burger-btn__close');
    const navMobile = document.querySelector('.nav__box');


    const allNavItems = document.querySelectorAll('.works__box-photo-extra');
    const worksButton = document.querySelector('.works__button');
    const worksButtonActive = document.querySelector('.works__button');
    


    function handleClick() {
        navMobile.classList.toggle('nav__box--active');
        burgerBtnOpen.classList.toggle('burger-btn__open--close');
        burgerBtnclose.classList.toggle('burger-btn__close--open');

    }
    burgerBtn.addEventListener('click', handleClick);



    function addShadow() {
        if (window.scrollY >= 39) {
            nav.classList.add('nav__shadow')
            navBox.classList.add('nav__box-margin')
        } else {
            nav.classList.remove('nav__shadow')
            navBox.classList.remove('nav__box-margin')
        }
    }
    window.addEventListener('scroll', addShadow)

    function activePhoto() {
        allNavItems.forEach(item => {
            item.classList.toggle('works__box-photo--active')
        })
        worksButtonActive.classList.toggle('works__button--active')
       
    }
    worksButton.addEventListener('click', activePhoto);



});