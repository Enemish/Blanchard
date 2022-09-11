document.addEventListener('DOMContentLoaded', function() {
	var swiper1 = new Swiper('.swiper', {

    autoHeight: false,
    /* slideToClickedSlide: true, */

		// Optional parameters
		direction: 'horizontal',
		/* loop: true, */
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
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
        grid: {
          rows: 1,
        }
      },
      755: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
        grid: {
          rows: 1,
        },
      },
      1200: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
        grid: {
          rows: 1,
        },
      },
      1800: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        slidesPerColumn: 1,
        grid: {
          rows: 1,
        },
      },
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        slidesPerColumn: 1,
        grid: {
          rows: 1,
        },
      },
    },
    /* При клике на пункт фильтра прокручивать слайдер к нужным слайдам  */
  });
  document.querySelectorAll('.gallery__s-i1').forEach(function(select_item1){

    select_item1.addEventListener('click' , function(){
      swiper1.slideTo(1);
    });

    select_item1.addEventListener('keydown' , function(e){
      if(e.key === 'Enter'){
        swiper1.slideTo(1);
      }
    });
  });
  document.querySelectorAll('.gallery__s-i2').forEach(function(select_item2){

    select_item2.addEventListener('click' , function(){
      swiper1.slideTo(19);
    });

    select_item2.addEventListener('keydown' , function(e){
      if(e.key === 'Enter'){
        swiper1.slideTo(19);
      }
    });
  });

});
