document.addEventListener('DOMContentLoaded', function() {


  /* Open search's menu */
  document.querySelector('.header__srch-link-open').addEventListener('click' , function(){
    document.querySelector('.header__srch-form').classList.toggle('header__srch-form-open');
    document.querySelector('.search').classList.toggle('search-open');
    document.querySelector('.header__srch-link-open').classList.toggle('header__srch-link-close');
  });
  /* Close search's menu */
/*   document.querySelector('.header__srch-link-close').addEventListener('click' , function(){
    document.querySelector('.header__srch-form').classList.remove('header__srch-form-open');
    document.querySelector('.search').classList.remove('search-open');
    document.querySelector('.header__srch-link-open').classList.remove('header__srch-link-close');
  }); */
  /* document.querySelector('.header__burger-btn-off').addEventListener('click' , function(){
    document.querySelector('.header__burger-menu-box').classList.remove('header__burger-menu-box-active');
  }); */
  /* var burgerItemLnk = document.querySelector('.header__burger-item-lnk'); */
  /* var burgerBox = document.querySelector('.header__burger-menu-box');
  document.querySelectorAll('.header__burger-item-lnk').forEach(function(burgerItemLnk){
    burgerItemLnk.addEventListener('click', function(){
          burgerBox.classList.remove('header__burger-menu-box-active');
      });
    }); */
});
