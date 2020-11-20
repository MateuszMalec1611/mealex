document.addEventListener('DOMContentLoaded', function () {

    // dodaje cień do nawigacji
    const nav = document.querySelector('.nav')

    function addShadow() {
        if (window.scrollY >= 39) {
            nav.classList.add('nav__shadow')
        } else {
            nav.classList.remove('nav__shadow')
        }
    }
    window.addEventListener('scroll', addShadow)

  
});