window.addEventListener("click", function (event) {
  console.log("Click window!");
  console.log(event.target.dataset.action);
  // Проверяем, является ли элемент по которому кликнули  - кнопкой плюс
  // if (event.target.dataset.action === "plus") {
  //   console.log("Plus");
  //   const counterBlock = event.target.closest(".quantity");
  //   console.log(counterBlock);
  // }
  // // Проверяем, является ли элемент по которому кликнули  - кнопкой минус
  // if (event.target.dataset.action === "minus") {
  //   const counterBlock = event.target.closest(".quantity");
  // }
});
