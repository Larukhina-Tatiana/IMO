$(function () {
  $(".card-product__list").slick({
    fade: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    asNavFor: ".card-product__dots-list",
    focusOnSelect: false,
  });
});

$(function () {
  $(".card-product__dots-list").slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    arrows: false,
    infinite: true,
    asNavFor: ".card-product__list",
    focusOnSelect: true,
  });
});
