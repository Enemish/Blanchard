document.addEventListener('DOMContentLoaded', function() {

    const swiper3 = new Swiper('.projcts__part-slider', {

      autoHeight: false,
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      grid: {
        rows: 1,
      },
      breakpointsInverse : 'false',
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 50,
          slidesPerColumn: 1,
        },
        751: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 50,
          slidesPerColumn: 1,
        },

        752: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
          slidesPerColumn: 1,
        },
        1023: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
          slidesPerColumn: 1,
        },

        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 50,
          slidesPerColumn: 1,
        },
        1199: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 50,
          slidesPerColumn: 1,
        },

        1201: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
          slidesPerColumn: 1,
        },
        1921: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
          slidesPerColumn: 1,
        },
      },
      // Cursor-Hand
      grabCursor: true,

      // Speed Slades
      speed: 1000,

      /* При клике на пункт фильтра прокручивать слайдер к нужным слайдам  */
    });
});
