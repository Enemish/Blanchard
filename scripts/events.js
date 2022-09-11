document.addEventListener('DOMContentLoaded', function() {

/*   const swiper = new Swiper('.events__eve-box', {

    autoHeight: false,

    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    slidesPerColumn: 1, */
    // Optional parameters
/*     direction: 'horizontal', */
    /* loop: true, */
/*     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    grid: {
      rows: 1,
    }, */

    // Cursor-Hand
   /*  grabCursor: true, */

    // Speed Slades
/*     speed: 1000,
  }); */




  document.querySelector('.events__btn').addEventListener('click' , function(){
    document.querySelector('.events__eve-box').classList.toggle('events__eve-box_open');
    if(this.innerHTML == "Все cобытия") {
      this.innerHTML = "Скрыть события" ;
    }
    else {
      this.innerHTML = "Все cобытия";
      }
  })
});
