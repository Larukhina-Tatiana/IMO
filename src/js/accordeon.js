// if (document.querySelector(".accordeon")) {
//   const accordeon = document.querySelector(".accordeon__list");
//   const accordeonTitles = accordeon.querySelectorAll(".accordeon__title");
//   accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
//     accordeonTitle.addEventListener("click", function () {
//       const currentText =
//         accordeonTitle.parentElement.querySelector(".accordeon__text");
//       accordeonTitle.classList.toggle("accordeon__title--active");
//       currentText.classList.toggle("accordeon__text--visible");

//       if (currentText.classList.contains("accordeon__text--visible")) {
//         currentText.style.maxHeight = currentText.scrollHeight + "px";
//       } else {
//         currentText.style.maxHeight = null;
//       }
//     });
//   });
// }

if (document.querySelector(".accordeon")) {
  $(".accordeon__title").on("click", function () {
    $(this).toggleClass("title--active");
    $(this).next().slideToggle("200");
  });
}
