// ! Tabs
if (document.querySelector(".tabs")) {
  $(".tabs__link").on("click", function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("tabs__link--active");

    $($(this).closest(".tabs-wrapper").siblings().find("li")).removeClass(
      "tabs__content--active"
    );

    $(this).addClass("tabs__link--active");
    $($(this).attr("href")).addClass("tabs__content--active");
  });
}

// Иконка фаворит становиться залитой
$(".card-product__favorite").on("click", function () {
  $(this).toggleClass("card-product__favorite--active");
});
