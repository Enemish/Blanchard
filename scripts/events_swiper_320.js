document.addEventListener('DOMContentLoaded', function() {
	var swiper4 = new Swiper('.events__eve-swiper', {

    autoHeight: false,
    /* slideToClickedSlide: true, */

		// Optional parameters
		direction: 'horizontal',
		/* loop: true, */
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      spaceBetween: 15,
    },
		// Cursor-Hand
		grabCursor: true,

		// Speed Slades
		speed: 1000,
    breakpointsInverse : 'false',
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      750: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      751: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 36,
      },
      1022: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 36,
      },

      1023: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 28,
      },

      1025: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 28,
      },
      1680: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        grid: {
          rows: 1,
        },
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    /* При клике на пункт фильтра прокручивать слайдер к нужным слайдам  */
  });
});
