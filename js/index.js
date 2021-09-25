
// htmldan elementlarni chaqirib olish

var elPizzaForm =document.querySelector(".pizza-form");
var elSelectBread = elPizzaForm.querySelector(".bread-select");
var elBreadResult = document.querySelector(".breadResult");
var elInputRadioWrapper = elPizzaForm.querySelector(".inputRadioWrapper");

var elInputRadioWrapperResult = document.querySelector(".inputRadioWrapperResult");

var elInputCheckboxWrapper = elPizzaForm.querySelector(".inputCheckboxWrapper");
var elInputCheckboxWrapper2 = elPizzaForm.querySelector(".inputCheckboxWrapper2");


// how to make bread 

elSelectBread.addEventListener('change', function () {
    elBreadResult.textContent = this.value;
  });



/* ==================== */
//  Kattaligi

var BreadSize = ["25cm", "30cm", "35cm"];

for (var i = 0; i < BreadSize.length; i++) {
  var radioDiv = document.createElement('div'); 
  radioDiv.classList.add('px-3');
  radioDiv.classList.add('border-label');


  var radioItem = document.createElement('input'); 
  radioItem.type = 'radio'; 
  radioItem.id = i; 
  radioItem.name = 'Bread-size'; 
  radioItem.value = BreadSize[i]; 
  radioItem.classList.add('d-none');

  var radioLabel = document.createElement('label'); 
  radioLabel.classList.add( 'd-block', 'rounded-circle'); 
  radioLabel.setAttribute('for', i);
  radioLabel.textContent = BreadSize[i];

  radioDiv.append(radioItem);
  radioDiv.append(radioLabel); 

  elInputRadioWrapper.append(radioDiv);

  radioItem.addEventListener('change', function () {
    elInputRadioWrapperResult.textContent = this.value;
  });
}

/* ============================================ */
// ustida nima bolishi 

var onPizzaArray = ["Pomidor", "Kurka go'shti", "Zaytun", "Tuzlangan bodring", "Qo'ziqorin", "Qazi"];
var onPizzaResultArr = [];

var elSelectedOnPizzaList = document.querySelector(".selectedOnPizzaList");

for (var i = 0; i < onPizzaArray.length; i++) {
  var onPizzaDiv = document.createElement('div'); 
  onPizzaDiv.classList.add('w-50', 'mb-2');

  var checkboxInput = document.createElement('input'); 
  checkboxInput.classList.add('mx-2'); 
  checkboxInput.type = 'checkbox'; 
  checkboxInput.name = onPizzaArray[i];
  checkboxInput.id = `checkInput-${i}`;
  checkboxInput.value = onPizzaArray[i];

  var labelCheck = document.createElement('label'); 
  labelCheck.classList.add('form-check-label');
  labelCheck.setAttribute('for', `checkInput-${i}`); 
  labelCheck.textContent = onPizzaArray[i]; 

  onPizzaDiv.append(checkboxInput); 
  onPizzaDiv.append(labelCheck); 

  elInputCheckboxWrapper.append(onPizzaDiv); 

  checkboxInput.addEventListener('change', function () {
    var currentValue = this.value; 
    var number = onPizzaResultArr.indexOf(currentValue); 
    if (number >= 0) {
      onPizzaResultArr.splice(number, 1); 
    }
    else {
      onPizzaResultArr.push(currentValue); 
    }
    swap();
  });
}

var swap = function () {
  elSelectedOnPizzaList.innerHTML = '';
  for (var i = 0; i < onPizzaResultArr.length; i++) {
    var lastItem = document.createElement('li'); 
    lastItem.textContent =" - " + onPizzaResultArr[i]; 
    elSelectedOnPizzaList.append(lastItem); 
  }
}


/* ============================================ */
// Qo'shimcha

var additionalArray = ["Achchiq", "Sosiskali"];
var additionalResultArr = [];

var elSelectedAdditionalPizzaList= document.querySelector(".selectedAdditionalPizzaList");

for (var i = 0; i < additionalArray.length; i++) {
  var onPizzaDiv2 = document.createElement('div'); 
  onPizzaDiv2.classList.add('w-50', 'mb-2');

  var checkboxInput2 = document.createElement('input'); 
  checkboxInput2.classList.add('mx-2'); 
  checkboxInput2.type = 'checkbox'; 
  checkboxInput2.name = additionalArray[i];
  checkboxInput2.id = `checkInput2-${i}`;
  checkboxInput2.value = additionalArray[i];

  console.log(checkboxInput2.value);

  var labelCheck2 = document.createElement('label'); 
  labelCheck2.classList.add('form-check-label');
  labelCheck2.setAttribute('for', `checkInput2-${i}`); 
  labelCheck2.textContent = additionalArray[i]; 

  onPizzaDiv2.append(checkboxInput2); 
  onPizzaDiv2.append(labelCheck2); 

  elInputCheckboxWrapper2.append(onPizzaDiv2); 

  checkboxInput2.addEventListener('change', function () {
    var currentValue2 = this.value; 
    var number2 = additionalResultArr.indexOf(currentValue2); 
    if (number2 >= 0) {
      additionalResultArr.splice(number2, 1); 
    }
    else {
      additionalResultArr.push(currentValue2); 
    }
    
    swap2();
  });
}

var swap2 = function () {
  elSelectedAdditionalPizzaList.innerHTML = '';
  for (var i = 0; i < additionalResultArr.length; i++) {
    var lastItem2 = document.createElement('li'); 
    lastItem2.textContent =" - " + additionalResultArr[i]; 
    elSelectedAdditionalPizzaList.append(lastItem2); 
  }
}
 
