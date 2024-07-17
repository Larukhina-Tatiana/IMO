// Находим кнопки
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector("[data-counter]");

//отслеживаем нажатие по минус
btnMinus.addEventListener("click", function () {
  console.log("Minus click");
  // Если больше 1, то уменьшаем
  if (parseInt(counter.innerText) > 1) {
    counter.innerText = --counter.innerText;
  }
});

//отслеживаем нажатие по минус
btnPlus.addEventListener("click", function () {
  console.log("Plus click");
  counter.innerText = ++counter.innerText;
});
