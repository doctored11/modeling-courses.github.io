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
// 

// 
// 
// 
// 
// 
// 

// 
