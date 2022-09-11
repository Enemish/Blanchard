document.addEventListener('DOMContentLoaded', function() {
  /* document.querySelectorAll('.catalog__lang-btn').forEach(function(langBtn){
    langBtn.addEventListener('click' , function(){
      document.querySelector('.catalog__lang-btn').classlist.add('catalog__lang-actv');
      this.classlist.add('catalog__lang-actv');
      this.blur();
    });
  }); */

    $('.catalog__lang-btn').click(function(){
      $('.catalog__lang-btn').removeClass('catalog__lang-actv');
      $(this).addClass('catalog__lang-actv');
      $(this).blur();
    });


});
