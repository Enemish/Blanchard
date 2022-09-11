document.addEventListener('DOMContentLoaded', function() {


  /* Open Burger's menu */
  document.querySelector('.header__burger-link').addEventListener('click' , function(){
    document.querySelector('.header__burger-menu-box').classList.add('header__burger-menu-box-active');
  });
  /* Close Burger's menu */
  document.querySelector('.header__burger-btn-off').addEventListener('click' , function(){
    document.querySelector('.header__burger-menu-box').classList.remove('header__burger-menu-box-active');
  });
  /* var burgerItemLnk = document.querySelector('.header__burger-item-lnk'); */
  var burgerBox = document.querySelector('.header__burger-menu-box');
  document.querySelectorAll('.header__burger-item-lnk').forEach(function(burgerItemLnk){
    burgerItemLnk.addEventListener('click', function(){
          burgerBox.classList.remove('header__burger-menu-box-active');
      });
    });
});

