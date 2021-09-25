
// htmldan elementlarni chaqirib olish

var elPizzaForm =document.querySelector(".pizza-form");
var elSelectBread = elPizzaForm.querySelector(".bread-select");
var elBreadResult = document.querySelector(".breadResult");
var elInputRadioWrapperResult = document.querySelector(".inputRadioWrapperResult");
var elInputCheckboxWrapper = elPizzaForm.querySelector(".inputCheckboxWrapper");
var elInputCheckboxWrapper2 = elPizzaForm.querySelector(".inputCheckboxWrapper2");

var elInputRadioWrapper = elPizzaForm.querySelector(".inputRadioWrapper");

// how to make bread 

// var optionBread =["Yupqa", "Qalin", "Farqiyoq"];

// for (var i = 0; i < optionBread.length; i++) {
//   var OptionItem = document.createElement('option');
//   OptionItem.value = optionBread[i];
//   OptionItem.textContent = optionBread[i];
//   OptionItem.classList = "text-denger";

//   elBreadResult.append(OptionItem);
// }

elSelectBread.addEventListener('change', function () {
    elBreadResult.textContent = this.value;
  });



/* ==================== */

