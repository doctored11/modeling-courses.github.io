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