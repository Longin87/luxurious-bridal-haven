const swiper = new Swiper('.accessories__slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.arrow-prew',
    prevEl: '.arrow-next',
  },
});