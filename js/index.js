// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var number of numbers) {
//   console.log(number);
// }

/* ==================== */

// var elsInputCheckbox = document.querySelectorAll('[type="checkbox"]');

// console.log(elsInputCheckbox);

// for (var i = 0; i < 5; i++) {
//   console.log(numbers[i]);
// }

// var elFruitsList = document.querySelector(".js-fruits-list");
var elInputWrapper = document.querySelector(".js-input-wrapper");

var fruits = [
  "olma",
  "nok",
  "anor",
  "shaftoli",
  "o'rik",
  "olcha",
  "gilos",
  "tut",
  "uzum",
  "banan",
  "mango",
  "kivi",
  "apelsin",
  "mandarin",
];
var checkedFruits = [];

for (var i = 0; i < fruits.length; i++) {
  var newelFruitsLabel = document.createElement("label");
  var newElFruitsCheckbox = document.createElement("input");
  var newElFruitsSpan = document.createElement("span");

  newElFruitsCheckbox.type = "checkbox";
  newElFruitsCheckbox.id = i;
  newElFruitsCheckbox.required = true;
  newElFruitsCheckbox.value = fruits[i];

  newElFruitsSpan.textContent = fruits[i];

  newElFruitsCheckbox.addEventListener("change", function (evt) {
    evt.preventDefault();

    var curruntFruit = newElFruitsCheckbox.value;
    console.log(curruntFruit);
  });

  newelFruitsLabel.appendChild(newElFruitsCheckbox);
  newelFruitsLabel.appendChild(newElFruitsSpan);

  elInputWrapper.appendChild(newelFruitsLabel);
}

var checkboxes = document.querySelectorAll('[type="checkbox"]');

// var checkedElements = function () {
//   if (newElFruitsCheckbox.checked) {
//     console.log(checkedFruits.push(newElFruitsCheckbox.value));
//   }
// };
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);
// var deleted = numbers.splice(3, 0);
// console.log(numbers);
// console.log(deleted);
