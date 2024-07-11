const selects = document.querySelector(".form__select");
// selects.forEach((el) => {
new Choices(selects, {
  shouldSort: false,
  position: "bottom",
  searchEnabled: false,
});
// });
