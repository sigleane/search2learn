const swiper = new Swiper(".swiper", {
    // Optional parameters
    spaceBetween: 5,
    slidesPerView: 1,
    loop: true,
    freeMode: true,
    loopAdditionalSlides: 5,
    speed: 500,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      //   quando a largura da janela é >= 640px
      640: {
        slidesPerView: 3,
        slidesPerGroups: 5,
        freeMode: false,
      },
    },
  });