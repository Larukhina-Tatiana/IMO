// Находим кнопк "В корзину"
const productBasket = document.querySelector(".card-product__basket");
// Div внутри корзины в которой мы добавляем товар
const chipbasketСontentДist = document.querySelector(
  ".chipbasket-content__list"
);
const chipbasket = document.querySelector(".chipbasket");
const chipbasketQuantity = document.querySelector(".chipbasket__quantity");
const sum = document.querySelector(".sum");
let price = 0;

const randomId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

const priceWithoutSpaces = (str) => {
  return str.replace(/\s/g, "");
};

const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
};

const generateCartProduct = (
  id,
  img,
  title,
  price,
  vendorcode,
  color,
  fullsum
) => {
  return `
				      <li class="chipbasket-content__item">
                <article class="chipbasket-product" data-id="${id}">
                  <div class="chipbasket-product__top">
                    <img class="chipbasket-product__img" src="${img}" loading="lazy" decoding="async" alt="${title}">
                    <div class="chipbasket-product__inner">
                      <h3 class="chipbasket-product__title chipbasket-product__meaning">${title}</h3>
                      <div class="chipbasket-product__vendorcode">Артикул:
                        <span class="chipbasket-product__meaning">${vendorcode}</span>
                      </div>
                      <div class="chipbasket-product__color">Цвет:
                        <span class="chipbasket-product__meaning">${color}</span>
                      </div>
                      <div class="chipbasket-product__size">Размер:
                        <span class="chipbasket-product__meaning">46</span>
                      </div>
                    </div>
                  </div>
                  <div class="chipbasket-product__center">
                    <div class="chipbasket-product__price">Цена:
                      <span class="chipbasket-product__meaning chipbasket-product__meaning--block price">
											${normalPrice(price)}
											</span>
                    </div>
                    <div class="quantity">
                      <div class="quantity-button quantity-down" data-action="minus">-
                      </div>
                      <div class="quantity-current" data-counter>1</div>
                      <div class="quantity-button quantity-up" data-action="plus">+
                      </div>
                    </div>
                    <div class="chipbasket-product__sum">Сумма:
                      <span class="chipbasket-product__meaning chipbasket-product__meaning--block fullsum">
											${normalPrice(fullsum)}  ₴
											</span>
                    </div>
                    <button class="chipbasket-product__btn-del" aria-label="Удалить товар" data-action='del'></button>
                  </div>
                </article>
                <div class="chipbasket-product__bottom">
                  <div class="chipbasket__fullprice">
                    Итого:
                    <span class="chipbasket-product__fullprice chipbasket-product__meaning">2 468.99 ₴</span>
                  </div>
                  <a class="product__btn-basket button button--bg-main-color" href="">В корзину</a>
                </div>
              </li>
	`;
};

productBasket.forEach((el) => {
  el.closest(".card-product").setAttribute("data-id", randomId());

  el.addEventListener("click", (e) => {
    let self = e.currentTarget;
    let parent = self.closest(".card-product");
    let id = parent.dataset.id;
    let img = parent.querySelector(".card-product__image").getAttribute("src");
    let title = parent.querySelector(".card-product__title").textContent;
    let priceString = priceWithoutSpaces(
      parent.querySelector(".card-product__price").textContent
    );
    let priceNumber = parseInt(
      priceWithoutSpaces(
        parent.querySelector(".card-product__price").textContent
      )
    );

    plusFullPrice(priceNumber);

    printFullPrice();

    cartProductsList
      .querySelector(".simplebar-content")
      .insertAdjacentHTML(
        "afterbegin",
        generateCartProduct(id, img, title, price, vendorcode, color, fullsum)
      );
    printQuantity();

    self.disabled = true;
  });
});
