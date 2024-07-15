// const menuBtn = document.querySelector(".header__menu-btn");
// const menu = document.querySelector(".header__menu-list");
// menuBtn.addEventListener("click", () => {
//   menu.classList.toggle("header__menu-list--active");
// });

$(".menu__btn").on("click", function () {
  $(".menu").toggleClass("menu-open");
  $(".menu__btn").toggleClass("menu-open");
});

if ($(window).width() < 980) {
  $(".header__top-menu-list").appendTo($(".menu-mobile__wrapper"));
}

if ($(window).width() < 1055) {
  $(".card-product__btn-buy").appendTo($(".card-product__box"));
}

$(function () {
  $(".hero__slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<button type="button" class="hero__slider-arrow hero__slider-arrow-next"><img src="./images/next.svg" alt="next arrow"  width="15" height="28"></button> ',
    prevArrow:
      '<button type="button" class="hero__slider-arrow hero__slider-arrow-prev"><img src="./images/prev.svg" alt="prev arrow"  width="15" height="28"></button> ',
    responsive: [
      {
        breakpoint: 881,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

// ! Tabs
$(".tabs__link").on("click", function (e) {
  e.preventDefault();

  $($(this).siblings()).removeClass("tabs__link--active");

  $($(this).closest(".tabs-wrapper").siblings().find("li")).removeClass(
    "tabs__content--active"
  );

  $(this).addClass("tabs__link--active");
  $($(this).attr("href")).addClass("tabs__content--active");

  // Инициализация слайдера
  $(".products__slider").slick("setPosition");
});

// Иконка фаворит становиться залитой

$(".products__card-favorite").on("click", function () {
  $(this).toggleClass("products__card-favorite--active");
});

$(function () {
  $(".products__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:
      '<button type="button" class="products__slider-arrow products__slider-arrow-next"><img src="./images/next-black.svg" alt="next arrow"  width="15" height="28"></button> ',
    prevArrow:
      '<button type="button" class="products__slider-arrow products__slider-arrow-prev"><img src="./images/prev-black.svg" alt="prev arrow"  width="15" height="28"></button> ',
    responsive: [
      {
        breakpoint: 1241,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});

$(".filter-style").styler();

$(".title-form, .aside__form-filter-btn-extra").on("click", function () {
  $(this).toggleClass("title-form--active");
  $(this).next().slideToggle("200");
});

$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 100000,
  max: 500000,
});

// Плитка Список
$(".catalog__view-btngrid").on("click", function () {
  $(this).addClass("catalog__view-button--active");
  $(".catalog__view-btnline").removeClass("catalog__view-button--active");
  $(".products__card").removeClass("products__card--line");
});
$(".catalog__view-btnline").on("click", function () {
  $(this).addClass("catalog__view-button--active");
  $(".catalog__view-btngrid").removeClass("catalog__view-button--active");
  $(".products__card").addClass("products__card--line");
});

// Звёздный рейтинг
$(".rate-yo").rateYo({
  ratedFill: "#1C62CD",
  spacing: "7px",
  normalFill: "#C4C4C4",
});

// открытие-закрытие заголовков footer__info-list
$(".footer__top-title").on("click", function () {
  $(this).next().slideToggle();
  $(this).toggleClass("footer__top-title--active");
});

// Фильтр Aside
$(".aside__btn").on("click", function () {
  $(this).next().slideToggle();
  // $(this).toggleClass("footer__top-title--active");
});

// var mixer = mixitup(".portfolio__box", {
//   load: {
//     filter: ".branding",
//   },
// });
