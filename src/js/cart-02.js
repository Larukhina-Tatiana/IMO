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

    // Проверяем Если элемент уже в корзине
    const itemInCart = cartWrapper.querySelector(
      `[data-id="${productInfo.id}"]`
    );
    // console.log(itemInCart);

    // Если товар в корзине
    if (itemInCart) {
      const counterElement = itemInCart.querySelector("[data-counter]");
      counterElement.innerText =
        parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    } else {
      // Если товара нет в корзине

      // Собранные данные подставляем в шаблон
      const cartItemHTML = `
          <div class="product__info" data-id="${productInfo.id}">
        <div class=" product__img images__thumb images__thumb--cart">
        <img src=${productInfo.imgSrc} loading="lazy" decoding="async" alt="${productInfo.title}">
        </div>
        <span class="product__color">${productInfo.color}</span>
        <span class="product__size">46</span>
        <span class="product__price">${productInfo.price}</span>
          <div class="quantity">
            <div class="quantity-button quantity-down" data-action="minus">-</div>
            <div class="quantity-current" data-counter>${productInfo.counter}</div>
            <div class="quantity-button quantity-up" data-action="plus">+</div>
        </div>
        <span class="product__sum">2 468.99</span>
        <button class="product__btn-del">Удалить товар</button>
      </div>`;

      // Отображаем товар в корзине

      cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
    }

    // Сбраываем счётчикв блоке карточки товара
    card.querySelector("[data-counter]").innerText = "1";
  }

  const delElement = document.querySelector(".product__btn-del");
  $(delElement).on("click", function () {
    console.log(event.target.closest(".product__info"));
    // event.target.closest(".product__info").remove();
  });
});
