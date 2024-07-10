// открытие-закрытие заголовков footer__info-list
$(".footer__body-title").on("click", function () {
  $(this).next().slideToggle();
  $(this).toggleClass("footer__body-title--active");
});

$(".filter-style").styler();

$(".js-range-slider").ionRangeSlider({
  skin: "round",
  type: "double",
  min: 1000,
  max: 5000,
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
