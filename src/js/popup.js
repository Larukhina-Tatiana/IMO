if (document.querySelector(".filters")) {
  $(".options__btn--filters").on("click", function () {
    $(".options__btn--filters").toggleClass("active");
    $(".filters").toggleClass("active");
  });
}
if (document.querySelector(".options__btn--sort")) {
  $(".options__btn--sort").on("click", function () {
    $(".options__btn--sort").toggleClass("active");
    $(".options-sort__popup").toggleClass("active");
  });
}
