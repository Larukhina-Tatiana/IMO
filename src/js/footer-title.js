// Аккардеон заголовки
if (document.querySelector(".footer")) {
  $(".footer__title").on("click", function () {
    $(this).toggleClass("title--active");
    $(this).next().slideToggle("200");
  });
}
