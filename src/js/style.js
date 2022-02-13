
const body = document.querySelector("body");

/*Quick order*/
const btnQuickOrder = document.querySelector('.header__top-btn');
const blockQuickOrder = document.querySelector('.quick-order');

const btnClose = document.querySelector('.quick-order__close');

btnQuickOrder.addEventListener('click', function(){
    blockQuickOrder.classList.toggle('active'); 
    body.classList.toggle('hidden'); 
});

btnClose.addEventListener('click', function(){
    blockQuickOrder.classList.remove('active');
    body.classList.remove('hidden'); 
})

/*Menu burger*/
const btnBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__nav');

const btnCloseMenu = document.querySelector('.header__close');


btnBurger.addEventListener('click', function(){
    headerMenu.classList.toggle('active'); 
    body.classList.toggle('hidden'); 
});

btnCloseMenu.addEventListener('click', function(){
    headerMenu.classList.remove('active');
    body.classList.remove('hidden'); 
})

/*Footer menu*/

const footerAccrdionTitle = document.querySelectorAll('.footer__card-title');
const footerAccrdionBody = document.querySelector('.footer__card-wrap');

footerAccrdionTitle.forEach((item) =>
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('active'); 
    })
)





$(document).ready(function () {
    if($(window).width() <=992){
        $('.header__categories').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '60px',
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '30px',
                },
            
            }],
        });
    }
    



    $('.news__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerPadding: '15px',
            },
        
        }],
    });


    $('.brands__slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        responsive: [{
            breakpoint: 840,
            settings: {
                slidesToShow: 3,
                
            },
        
        }],
    });


});