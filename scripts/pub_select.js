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
};
  var PubSelect = document.querySelector('.pub__select-box320');
  var PubLable = PubSelect.querySelectorAll('.pub__input-label');
  var PubSelectBtn = PubSelect.querySelector('.pub__select-btn');
  var PubSelectBody = PubSelect.querySelector('.pub__select-body');
  var PubSelectItem = PubSelect.querySelectorAll('.pub__tbl-item');
  var PubSelectIcon = PubSelect.querySelector('.pub__select-icon');

  /* $('#pub__input320-4').prop('checked', true); */
  /* По клику появляется и исчезает список так же задаем header focus*/
    PubSelectBtn.addEventListener('click' , function(){
      document.querySelectorAll('.pub__tbl-item').forEach(function(pub_li){
          pub_li.classList.remove('pub__item-inact');
          pub_li.classList.remove('pub__tbl-item_active');
          pub_li.classList.add('pub__item-att');
        });
        PubSelectBody.classList.toggle('pub__body-visible');
        /* this.classList.add('pub__select-btn_focus'); */
        PubSelectIcon.classList.toggle('pub__icon-active');
      });
      /* По нажатию на крестик закрываем список */
      document.querySelectorAll('.pub__input-label-icon').forEach(function(lable_icon){
        lable_icon.addEventListener('click' , function(){
          PubSelectBody.classList.toggle('pub__body-visible');
          /* $('#pub__input320-4').prop('checked', false); */
          PubSelectIcon.classList.toggle('pub__icon-active');
        });
        /* this.classList.add('pub__select-btn_focus'); */
      });
      /* По нажатию на пункт списка удаляем остальные оставляя только выбранный */
    PubSelectItem.forEach(function(pub_li_active){
      pub_li_active.addEventListener('click' , function(){
        this.classList.add('pub__tbl-item_active');
        this.classList.remove('pub__item-att');
        document.querySelectorAll('.pub__item-att').forEach(function(pub_li_att){
          pub_li_att.classList.add('pub__item-inact');
        });
      });
    });
    /* Убираем список по клику вне его и убераем у header focus */
    /* document.addEventListener('click', function(e){
      if (e.target !== PubSelectBtn){
        PubSelectBtn.classList.remove('pub__select-btn_focus');
        PubSelectBody.classList.remove('pub__body-visible');
        PubSelectIcon.classList.remove('pub__icon_active');
      }
    }); */

    /* По нажатию клавиши enter появляется и исчезает список*/
    /* PubelectBtn.addEventListener('keydown', function(e){
      if (e.keyCode === 13) {
        PubSelectBody.classList.toggle('gall_select_body_visible');
        PubSelectIcon.classList.toggle('gall_icon_active');
      }
    }); */
  /* При преходе от окрытого списка к следующему зактытому, закрыть предыдущий */
 /*  gall_select.querySelectorAll('.s_i_foc-out').forEach(function(focout){
    focout.addEventListener('focusout', function(){
      GallselectBody.classList.remove('gall_select_body_visible');
      GallselectIcon.classList.remove('gall_icon_active');
    });
  }); */
  /* Выбор из списка заносится в select_header и в input */
  /* GallselectItem.forEach(function(selectItem){
    selectItem.addEventListener('click' , function(e){
      e.stopPropagation()
      gall_select.querySelector('.gall_select_header').innerText = this.innerText;
      gall_select.querySelector('.gall_select_input_hidden').value = this.dataset.value;
      GallselectBody.classList.remove('gall_select_body_visible');
      GallselectIcon.classList.remove('gall_icon_active');
    })
  }); */
  /* Выбор из списка заносится в select_header и в input по нажатию Enter */
 /*  GallselectItem.forEach(function(selectItem){
    selectItem.addEventListener('keydown' , function(e){
      if(e.key === 'Enter'){
        gall_select.querySelector('.gall_select_header').innerText = this.innerText;
        gall_select.querySelector('.gall_select_input_hidden').value = this.dataset.value;
        GallselectBody.classList.remove('gall_select_body_visible');
        GallselectIcon.classList.remove('gall_icon_active');
        GallselectBtn.focus();
      }
    })
  }); */
  /* Закрываем select по нажатию esc */
 /*  gall_select.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
      GallselectBtn.classList.remove('gall_select_btn_focus');
      GallselectBody.classList.remove('gall_select_body_visible');
      GallselectIcon.classList.remove('gall_icon_active');
    }
  }); */
