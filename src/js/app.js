window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    "(width <= 1250px)",
    ".slider-1",
    {
      loop: true,
      // spaceBetween: 20,
      // slidesPerView: 2,
      // pagination: {
      //   el: ".swiper-pag",
      //   clickable: true,
      // },
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      breakpoints: {
        820: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        810: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      },
    },
    someFunc
  );

  // resizableSwiper("(max-width: 1500px)", ".slider-2", {
  //   loop: true,
  //   spaceBetween: 10,
  //   slidesPerView: 3,
  //   freeMode: true,
  //   breakpoints: {
  //     1200: {
  //       spaceBetween: 20,
  //     },
  //   },
  // });
});
