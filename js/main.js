(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-search]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

$(".nav__menu-btn").on("click", function () {
  $(".nav-main").toggleClass("menu--open");
});

if ($(window).width() < 1024.99) {
  $(".header__location").appendTo($(".header__menu-main-rightrow--mobile"));

  $(".nav-extra__list").appendTo($(".nav-main"));

  $(".product-category__content").appendTo($(".product-category__box"));
}

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

var mySlider = new Splide(".splide", {
  perPage: 4,
  arrows: false,
  // rewind: true,
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

// $(function () {
//   $(".slider__list").slick({
//     dots: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: false,
//     // infinite: true,
//     // variableWidth: true,
//     responsive: [
//       {
//         breakpoint: 895.99,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       //   {
//       //     breakpoint: 769,
//       //     settings: {
//       //       arrows: false,
//       //       slidesToShow: 1,
//       //       slidesToScroll: 1,
//       //     },
//       //   },
//     ],
//   });
// });

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
