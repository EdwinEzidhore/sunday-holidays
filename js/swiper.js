// BANNER
var swiper = new Swiper("#banner", {
  speed: 5000,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
  autoplay: true,
  breakpoints: {
    
    999: {
      navigation: {
        enabled: false,
      },
    },
    1000: {
      navigation: {
        enabled: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});
