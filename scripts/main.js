// swiper Partner
var swiper = new Swiper(".partnerSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 280px
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
      // slideToClickedSlide: true,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
      // slideToClickedSlide: true,
    },
    // when window width is >= 575px
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
      // slideToClickedSlide: true,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
       spaceBetween: 30,
      // slideToClickedSlide: true,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 1,
      // spaceBetween: 0,
      // slideToClickedSlide: true,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
      // slideToClickedSlide: true,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
      // slideToClickedSlide: true,
    },
  },
});

// Swiper Comment 
var swiper = new Swiper(".commentSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
  breakpoints: {
    // when window width is >= 280px
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
      // slideToClickedSlide: true,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
      // slideToClickedSlide: true,
    },
    // when window width is >= 575px
    575: {
      slidesPerView: 3,
      spaceBetween: 10,
      // slideToClickedSlide: true,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      // spaceBetween: 0,
      // slideToClickedSlide: true,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 1,
      // spaceBetween: 0,
      // slideToClickedSlide: true,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
      // slideToClickedSlide: true,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
      // slideToClickedSlide: true,
    },
  },
});