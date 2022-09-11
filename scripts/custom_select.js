// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: https://es5.github.io/#x15.4.4.18

if (!Array.prototype['forEach']) {

  Array.prototype.forEach = function(callback, thisArg) {

    if (this == null) { throw new TypeError('Array.prototype.forEach called on null or undefined'); }

    var T, k;
    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: https://es5.github.io/#x9.11
    if (typeof callback !== "function") { throw new TypeError(callback + ' is not a function'); }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) { T = thisArg; }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}



document.querySelectorAll('.header__select-box').forEach(function (boxSelectAll){

  const selectBtn = boxSelectAll.querySelector('.header__select-btn');
  const selectBody = boxSelectAll.querySelector('.header__select-body');
  const selectItem = boxSelectAll.querySelectorAll('.header__select-item');
  const selectIcon = boxSelectAll.querySelector('.header__hdr-icon');


  /* По клику появляется и исчезает список так же задаем header focus*/
  selectBtn.addEventListener('click' , function(){
    selectBody.classList.toggle('header__select-body-visible');
    /* this.classList.add('box_select_btn_focus'); */
    selectIcon.classList.toggle('header__hdr-icon-active');
  });
  /* По нажатию клавиши enter появляется и исчезает список*/
  selectBtn.addEventListener('keydown', function(e){
    if (e.keyCode === 13) {
      selectBody.classList.toggle('header__select-body-visible');
      selectIcon.classList.toggle('header__hdr-icon-active');
    }
  });
  /* При преходе от окрытого списка к следующему зактытому, закрыть предыдущий */
  document.querySelectorAll('.header__s-i-foc-out').forEach(function(focout){
    focout.addEventListener('focusout', function(){
      selectBody.classList.remove('header__select-body-visible');
      selectIcon.classList.remove('header__hdr-icon-active');
    });
  });

  /* Выбор из списка заносится в header__select-hdr и в input */
  selectItem.forEach(function(selectItem){
    selectItem.addEventListener('click' , function(e){
      e.stopPropagation()
      boxSelectAll.querySelector('.header__select-hdr').innerText = this.innerText;
      boxSelectAll.querySelector('.header__input-hidd').value = this.dataset.value;
      selectBody.classList.remove('header__select-body-visible');
      selectIcon.classList.remove('header__hdr-icon-active');
    })
  });
  /* Выбор из списка заносится в header__select-hdr и в input по нажатию Enter */
  selectItem.forEach(function(selectItem){
    selectItem.addEventListener('keydown' , function(e){
      if(e.key === 'Enter'){
        boxSelectAll.querySelector('.header__select-hdr').innerText = this.innerText;
        boxSelectAll.querySelector('.header__input-hidd').value = this.dataset.value;
        selectBody.classList.remove('header__select-body-visible');
        selectIcon.classList.remove('header__hdr-icon-active');
        selectBtn.focus();
      }
    })
  });
  /* Убираем список по клику вне его и убераем у header focus */
  document.addEventListener('click', function(e){
    if (e.target !== selectBtn){
      /* selectBtn.classList.remove('box_select_btn_focus'); */
      selectBody.classList.remove('header__select-body-visible');
      selectIcon.classList.remove('header__hdr-icon-active');
    }
  });
  /* Закрываем select по нажатию tab или esc */
  document.addEventListener('keydown', function(e){
    if (/* e.key === 'Tab' || */ e.key === 'Escape'){
      /* selectBtn.classList.remove('box_select_btn_focus'); */
      selectBody.classList.remove('header__select-body-visible');
      selectIcon.classList.remove('header__hdr-icon-active');
    }
  })

})

