let autoplay = 1000;
const swiper = new Swiper('.swiper-customers', {
  // Default parameters
  slidesPerView:2.58039,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    850: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2.39,
      spaceBetween: 20
    },
    1270: {
      slidesPerView: 2.58039,
      spaceBetween: 20
    },
    
    
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
})

