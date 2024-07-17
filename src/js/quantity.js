window.addEventListener("click", function (event) {
  // проверяем клик строго по кнопкам плюс или минус
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    // Проверяем, является ли элемент по которому кликнули  - кнопкой плюс
    // находим родителя счётчика
    const counterBlock = event.target.closest(".quantity");
    // Находим див с числом счётчика
    const counter = counterBlock.querySelector("[data-counter]");

    if (event.target.dataset.action === "plus") {
      counter.innerText = ++counter.innerText;
    }
    // // Проверяем, является ли элемент по которому кликнули  - кнопкой минус
    if (event.target.dataset.action === "minus") {
      // если больше 1 - уменьшаем
      if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
      }
    }
  }
});
