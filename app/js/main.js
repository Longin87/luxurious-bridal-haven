const swiper = new Swiper('.accessories__slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
});

const swiperReviews = new Swiper('.reviews-slider', {
  slidesPerView: 8,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: '.reviews-slider-next',
    prevEl: '.reviews-slider-prev',
  },
  pagination: {
    el: ".reviews-slider-pagination",
    type: "fraction",
  },
});