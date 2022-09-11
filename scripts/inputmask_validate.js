document.addEventListener
("DOMContentLoaded",function()
{
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999)-999-99-99");
  im.mask(selector);

  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e)
  {
    e.preventDefault();

    let error = formValidate(form);
  }

  function formValidate(form)
  {
    let error = 0;
    let formReq = document.querySelectorAll('._req')

    for (let index = 0; index < formReq.length; index++)
    {
      const input = formReq[index];
      formRemoveError(input);


      if (input.classList.contains('contacts__input'))
      {
        if (input.value === '')
        {
            formAddError(input);
            error++;
        }
        else
        {
          if (input.classList.contains('contacts__input-name'))
          {
            if (nameTest(input))
            {
              formAddErrorFormat(input);
              error++;
            }
            else
            {
              formRemoveErrorFormat(input);
            }
          }
          else
          {
            formRemoveError(input);
          }
        }
      }
    }
  }

  function formAddError(input)
  {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input)
  {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function formAddErrorFormat(input)
  {
    input.classList.add('_errorformat');
    input.parentElement.classList.add('_errorformat');
  }
  function formRemoveErrorFormat(input)
  {
    input.classList.remove('_errorformat');
    input.parentElement.classList.remove('_errorformat');
  }

  function nameTest(input)
  {
    return !/[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(input.value);
  }
}
);
