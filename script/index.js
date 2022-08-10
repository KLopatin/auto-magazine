const btnMenu = document.querySelector('.mobile-button');
const menu = document.querySelector('.menu');
const headLogo = document.querySelector('.header__logo')

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('mobile-button_line-active')
    menu.classList.toggle('menu-active')
    headLogo.classList.toggle('header__logo-active')
})

