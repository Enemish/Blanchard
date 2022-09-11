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
document.querySelectorAll('.gallery__select').forEach(function(gall_select){
  const GallselectBtn = gall_select.querySelector('.gallery__select-btn');
  const GallselectBody = gall_select.querySelector('.gallery__select-body');
  const GallselectItem = gall_select.querySelectorAll('.gallery__select-item');
  const GallselectIcon = gall_select.querySelector('.gall-icon');

  /* По клику появляется и исчезает список так же задаем header focus*/
    GallselectBtn.addEventListener('click' , function(){
        GallselectBody.classList.toggle('gallery__select-body-vsbl');
        this.classList.add('gallery__select-btn-focus');
        GallselectIcon.classList.toggle('gall-icon-active');
      });
    /* Убираем список по клику вне его и убераем у header focus */
    document.addEventListener('click', function(e){
      if (e.target !== GallselectBtn){
        GallselectBtn.classList.remove('gallery__select-btn-focus');
        GallselectBody.classList.remove('gallery__select-body-vsbl');
        GallselectIcon.classList.remove('gall-icon-active');
      }
    });

    /* По нажатию клавиши enter появляется и исчезает список*/
    GallselectBtn.addEventListener('keydown', function(e){
      if (e.keyCode === 13) {
        GallselectBody.classList.toggle('gallery__select-body-vsbl');
        GallselectIcon.classList.toggle('gall-icon-active');
      }
    });
  /* При преходе от окрытого списка к следующему зактытому, закрыть предыдущий */
  gall_select.querySelectorAll('.gallery__item-no-focus').forEach(function(focout){
    focout.addEventListener('focusout', function(){
      GallselectBody.classList.remove('gallery__select-body-vsbl');
      GallselectIcon.classList.remove('gall-icon-active');
    });
  });
  /* Выбор из списка заносится в select_header и в input */
  GallselectItem.forEach(function(selectItem){
    selectItem.addEventListener('click' , function(e){
      e.stopPropagation()
      gall_select.querySelector('.gallery__select-hdr').innerText = this.innerText;
      gall_select.querySelector('.gallery__input-hidd').value = this.dataset.value;
      GallselectBody.classList.remove('gallery__select-body-vsbl');
      GallselectIcon.classList.remove('gall-icon-active');
    })
  });
  /* Выбор из списка заносится в select_header и в input по нажатию Enter */
  GallselectItem.forEach(function(selectItem){
    selectItem.addEventListener('keydown' , function(e){
      if(e.key === 'Enter'){
        gall_select.querySelector('.gallery__select-hdr').innerText = this.innerText;
        gall_select.querySelector('.gallery__input-hidd').value = this.dataset.value;
        GallselectBody.classList.remove('gallery__select-body-vsbl');
        GallselectIcon.classList.remove('gall-icon-active');
        GallselectBtn.focus();
      }
    })
  });
  /* Закрываем select по нажатию esc */
  gall_select.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
      GallselectBtn.classList.remove('gallery__select-btn-focus');
      GallselectBody.classList.remove('gallery__select-body-vsbl');
      GallselectIcon.classList.remove('gall-icon-active');
    }
  });
});

