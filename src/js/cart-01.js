// Div внутри корзины в которой мы добавляем товар
const cartWrapper = document.querySelector(".cart-wrapper");

// проверяем клик на окне
window.addEventListener("click", function (event) {
  // проверяем что клик был именно по кнопке "В корзину"
  if (event.target.hasAttribute("data-cart")) {
    // Находим карточку товара по кнопке которой кликнули
    const card = event.target.closest(".card");
    // console.log(card);
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".page-card__img").getAttribute("src"),
      color: card.querySelector(".page-card_color").innerText,
      title: card.querySelector(".page-card__title").innerText,
      price: card.querySelector(".page-card__price-price").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };
    console.log(productInfo);

    // Собранные данные подставляем в шаблон
    const cartItemHTML = `
          <div class="product__info">
        <div class=" product__img images__thumb images__thumb--cart">
        <img src=${productInfo.imgSrc} loading="lazy" decoding="async" alt="images">
        </div>
        <span class="product__color">${productInfo.color}</span>
        <span class="product__size">46</span>
        <span class="product__price">${productInfo.price}</span>
        <span class="product__sum">2 468.99</span>
      </div>`;

    // Отображаем товар в корзине

    cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
  }
});
