// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-search]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

// $(".nav__menu-btn").on("click", function () {
//   $(".nav-main").toggleClass("menu--open");
// });

// if ($(window).width() < 1024.99) {
//   $(".header__location").appendTo($(".header__menu-main-rightrow--mobile"));

//   $(".nav-extra__list").appendTo($(".nav-main"));

//   $(".product-category__content").appendTo($(".product-category__box"));
// }

var swiper = new Swiper(".swiper", {
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

// ! Tabs
$(".tabs__link").on("click", function (e) {
  e.preventDefault();

  $($(this).siblings()).removeClass("tabs__link--active");

  $($(this).closest(".tabs-wrapper").siblings().find("li")).removeClass(
    "tabs__content--active"
  );

  $(this).addClass("tabs__link--active");
  $($(this).attr("href")).addClass("tabs__content--active");
});

// Иконка фаворит становиться залитой
$(".card-product__favorite").on("click", function () {
  $(this).toggleClass("card-product__favorite--active");
});

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

if ($(window).width() < 768.99) {
  $(".social-icons").appendTo($(".subscription__offer"));
}

// const slider = document.querySelector(".current__slider");
// const next = document.querySelector(".next");
// const prev = document.querySelector(".prev");

// const mySiema = new Siema({
//   selector: slider,
//   loop: true,
//   threshold: 100,
//   duration: 1000,
//   easing: "cubic-bezier(.17,.67,.32,1.34)",
// });
// next.addEventListener("click", onNextClick);
// prev.addEventListener("click", onPrevClick);

// function onNextClick() {
//   mySiema.next();
// }

// function onPrevClick() {
//   mySiema.prev();
// }

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

// // $(function () {
// // $(".reviews__slider").slick({
// //   dots: true,
// //   slidesToShow: 1,
// //   slidesToScroll: 1,
// //   arrows: false

//   //     responsive: [
//   //   {
//   //     breakpoint: 1024,
//   //     settings: {},
//   //   },
//   //   {
//   //     breakpoint: 640,
//   //     settings: {
//   //       arrows: false,
//   //     },
//   //   },
//   // ],
// // });
// // });

// const swiperOne = new Swiper(".reviews__slider", {
//   loop: true,
//   // effect: "coverflow",
//   // effect: 'fade',
//   pagination: {
//     el: ".swiper-pagination",
//   },
// //   autoplay: {
// //     delay: 4000,
// //     disableOnInteraction: true
// //   }
// });

// const swiperTvo = new Swiper(".certificates__slider", {
//   // loop: true,
//   slidesPerView: 1,
//   spaceBetween: 10,

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     480: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//     1000: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//   },
// //   autoplay: {
// //     delay: 4000,
// //     disableOnInteraction: true
// //   }
// });

// const accordeon = document.querySelector('.accordeon__list');
// const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');
// accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
//   accordeonTitle.addEventListener('click', function () {
//           const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');
//     accordeonTitle.classList.toggle('accordeon__title--active');
//     currentText.classList.toggle('accordeon__text--visible');

//     if (currentText.classList.contains('accordeon__text--visible')) {
//       currentText.style.maxHeight = currentText.scrollHeight + 'px'
//     } else {
//       currentText.style.maxHeight = null
//     }

//   });
// });
