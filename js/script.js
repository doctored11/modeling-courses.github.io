let burger = document.querySelector('.header__burger-ico');
let menu = document.querySelector('.header__drop-down-menu ');
let menuLinks = menu.querySelectorAll('.header__menu');
// burger
burger.addEventListener('click',
    function() {
        burger.classList.toggle('header__burger-ico--cross');
        menu.classList.toggle('header__drop-down-menu--active');

        document.body.classList.toggle('stop-scroll');
    }
);

menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        burger.classList.remove('header__burger-ico--cross');
        menu.classList.toggle('header__drop-down-menu--active');
        document.body.classList.remove('stop-scroll');


    })
});
// 
const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,},




    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
});