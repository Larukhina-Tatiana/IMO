// проверяем клик на окне
window.addEventListener("click", function (event) {
  // проверяем что клик был именно по кнопке "В корзину"
  if (event.target.hasAttribute("data-cart")) {
    // Находим карточку товара по кнопке которой кликнули
    const card = event.target.closest(".card");

    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".card__img").getAttribute("src"),

      // console.log(card);
    };
  }
});
