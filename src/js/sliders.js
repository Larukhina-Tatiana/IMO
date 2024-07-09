if (document.querySelector(".hero__swiper")) {
  var swiper = new Swiper(".hero__swiper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pag",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      661: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          type: "fraction",
        },
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        pagination: {
          type: "fraction",
        },
      },
    },
    on: {
      init: function (swiper) {},
    },
  });
}

if (document.querySelector(".splide")) {
  var mySlider = new Splide(".splide", {
    perPage: 4,
    arrows: false,
    gap: "20px",
    breakpoints: {
      1199: {
        perPage: 3,
        gap: "20px",
        // height: "6rem",
      },
      684: {
        perPage: 2,
        gap: "20px",
        // height: "6rem",
      },
      480: {
        perPage: 1,
        gap: ".7rem",
        height: "6rem",
      },
    },
  });
  mySlider.mount();
}

if (document.querySelector(".splide1")) {
  var mySlider1 = new Splide(".splide1", {
    perPage: 4,
    arrows: true,
    gap: "30px",
    breakpoints: {
      1199: {
        perPage: 3,
        gap: "20px",
      },
      768: {
        perPage: 2,
        gap: "10px",
      },
      // 480: {
      //   perPage: 1,
      //   gap: ".7rem",
      //   height: "6rem",
      // },
    },
  });
  mySlider1.mount();
}
if (document.querySelector(".splide2")) {
  var mySlider2 = new Splide(".splide2", {
    perPage: 4,
    arrows: true,
    gap: "30px",
    breakpoints: {
      1199: {
        perPage: 3,
        gap: "30px",
      },
      768: {
        perPage: 2,
        gap: "10px",
      },
      // 480: {
      //   perPage: 1,
      //   gap: ".7rem",
      //   height: "6rem",
      // },
    },
  });
  mySlider2.mount();
}

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

if (document.querySelector(".current__slider-box")) {
  var swiperTvo = new Swiper(".current__slider-box", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pag",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      661: {
        pagination: {
          type: "fraction",
        },
      },
    },
    on: {
      init: function (swiperTvo) {},
    },
  });
}

if (document.querySelector(".fashion-news")) {
  var swiper = new Swiper(".slider-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pag",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      661: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        pagination: {
          type: "fraction",
        },
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        pagination: {
          type: "fraction",
          spaceBetween: 30,
        },
      },
    },
    on: {
      init: function (swiper) {},
    },
  });
}
