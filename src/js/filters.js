// открытие-закрытие заголовков footer__info-list
$(".filters__btn").on("click", function () {
  $(this).next().slideToggle();
  $(this).toggleClass("active");
});

$(".filter-style").styler();

$(".js-range-slider").ionRangeSlider({
  skin: "round",
  type: "double",
  // min: 450,
  // max: 5000,
});

// const rangeItems = document.querySelectorAll("[data-range]");
// if (rangeItems.length) {
//   rangeItems.forEach((rangeItem) => {
//     const fromValue = rangeItem.querySelector("[data-range-from]");
//     const toValue = rangeItem.querySelector("[data-range-to]");
//     const item = rangeItem.querySelector("[data-range-item]");
//     noUiSlider.create(item, {
//       start: [Number(fromValue.value), Number(toValue.value)],
//       connect: true,
//       range: {
//         min: [Number(fromValue.dataset.rangeFrom)],
//         max: [Number(toValue.dataset.rangeTo)],
//       },
//     });
//   });
// }

const rangeSliderInit = () => {
  // создаем функцию инициализации слайдера
  const range = document.getElementById("range"); // Ищем слайдер
  const inputMin = document.getElementById("min"); // Ищем input с меньшим значнием
  const inputMax = document.getElementById("max"); // Ищем input с большим значнием

  if (!range || !inputMin || !inputMax) return; // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

  const inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения

  noUiSlider.create(range, {
    // инициализируем слайдер
    start: [750, 2500], // устанавливаем начальные значения
    tooltips: [true, true],
    connect: true, // указываем что нужно показывать выбранный диапазон
    range: {
      // устанавливаем минимальное и максимальное значения
      min: 0,
      max: 7500,
    },
    step: 1, // шаг изменения значений
  });

  range.noUiSlider.on("update", function (values, handle) {
    // при изменений положения элементов управления слайдера изменяем соответствующие значения
    inputs[handle].value = parseInt(values[handle]);
  });

  inputMin.addEventListener("change", function () {
    // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener("change", function () {
    // при изменении большего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([null, this.value]);
  });
};

const init = () => {
  rangeSliderInit(); // запускаем функцию инициализации слайдера
};
window.addEventListener("DOMContentLoaded", init); // запускаем функцию init, когда документ будет загружен и готов к взаимодействию
