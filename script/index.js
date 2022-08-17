//---------Кнопка меню-------------
const btnMenu = document.querySelector('.mobile-button');
const menu = document.querySelector('.menu');
const headLogo = document.querySelector('.header__logo')

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('mobile-button_line-active')
    menu.classList.toggle('menu-active')
    headLogo.classList.toggle('header__logo-active')
})

//------------------------------------------------
//Блок кода для плавной прокрутки к якорным ссылкам на чистом JS
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
//-----------------------------------------------
//-----------Slider блок Галерея-----------------
const images = document.querySelectorAll('.slider .slider-line img');
const slider = document.querySelector('.slider');
const sliderLine = document.querySelector('.slider-line');

let count = 0;
let width;

function init() {
    width = slider.offsetWidth; // Узнаем ширину блока слайдер
    sliderLine.style.width = width*images.length + 'px'; //Задаем слайдер лайн ширину равную ширине слайдера умнож. на кол-во картинок
    images.forEach( item => { //Каждое изображение делаем равное по ширине блоку слайдер(ширина изображения должна стать равной ширине блока слайдер)
         item.style.width = width + 'px';
         item.style.height = 'auto';  //На всякий случай принудительно задаем высоту - авто
    });
    rollSlider();
}
window.addEventListener('resize', init);
init();

function rollSlider() {    //Функция смещения картинки
    sliderLine.style.transform = 'translate(-'+count*width+'px)'
};

document.querySelector('.slider__button-next').addEventListener('click', function(){
    count++;
    if (count >= images.length) { //Проверка на конец галереи
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider__button-prev').addEventListener('click', function(){
    count--;
    if (count < 0) { //Проверка на начало галереи
        count = images.length - 1;
    }
    rollSlider();
});
//--------------------------------------------------------------
//---------------Переключение текста статей---------------------
const inputCircle = document.querySelectorAll('.press__radio'); 
const inputText = document.querySelectorAll('.press__article') 
 
inputCircle[1].addEventListener('click', () => { 
    inputText[1].classList.remove('press__article_disabled'); 
    inputText[0].classList.add('press__article_disabled') 
}) 
 
inputCircle[0].addEventListener('click', () => { 
    inputText[0].classList.remove('press__article_disabled'); 
    inputText[1].classList.add('press__article_disabled') 
})