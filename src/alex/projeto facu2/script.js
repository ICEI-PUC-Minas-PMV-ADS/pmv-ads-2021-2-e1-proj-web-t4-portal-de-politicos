(function () {
  "use strict";
  let inputField = document.getElementById('input');
  let ulField = document.getElementById('suggestions');
  inputField.addEventListener('input', changeAutoComplete);
  ulField.addEventListener('click', selectItem);

  function changeAutoComplete({ target }) {
    let data = target.value;
    ulField.innerHTML = ``;
    if (data.length) {
      let autoCompleteValues = autoComplete(data);
      autoCompleteValues.forEach(value => { addItem(value); });
    }
  }

  function autoComplete(inputValue) {
    let minimumChars = 2
    let destination = [
      {
        id: 1,
        name: 'Alex junio',
        partido: 'PUC',
        voto: 'Sim'
    },
    {   
        id: 2,
        name: 'Sheila Gomes',
        partido: 'PUC',
        voto: 'Sim'
    },
    {   
        id: 3,
        name: 'Paulo Santos',
        partido: 'PO',
        voto: 'Não'
    },
    {   
        id: 4,
        name: 'João Carlos',
        partido: 'PO',
        voto: 'Sim'
    }
    ];
  
    return destination.filter(
      (value) => value.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  function addItem(value) {
    ulField.innerHTML = ulField.innerHTML + `<li>${value}</li>`;
  }

  function selectItem({ target }) {
    if (target.tagName === 'LI') {
      inputField.value = target.textContent;
      ulField.innerHTML = ``;
    }
  }
})();