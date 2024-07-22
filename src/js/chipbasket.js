// Находим кнопк "В корзину"
const productBasket = document.querySelector(".card-product__basket");

// Div внутри корзины в которой мы добавляем товар
const chipbasketСontentList = document.querySelector(
  ".chipbasket-content__list"
);
// console.log(chipbasketСontentList);
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

const plusFullPrice = (currentPrice) => {
  return (price += currentPrice);
};

const minusFullPrice = (currentPrice) => {
  return (price -= currentPrice);
};

const printQuantity = () => {
  let productsListLength =
    chipbasketСontentList.querySelector(".simplebar-content").children.length;
  // cartQuantity.textContent = productsListLength;
  productsListLength > 0
    ? chipbasket.classList.add("active")
    : chipbasket.classList.remove("active");
};

const printFullPrice = () => {
  fullPrice.textContent = `${normalPrice(price)} ₽`;
};
console.log(price);

const generateCartProduct = (
  id,
  img,
  title,
  price,
  vendorcode,
  color,
  size,
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
                      <span class="chipbasket-product__meaning">${size}</span>
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
console.log(generateCartProduct);
const deleteProducts = (productParent) => {
  let id = productParent.querySelector(".cart-product").dataset.id;
  document
    .querySelector(`.product[data-id="${id}"]`)
    .querySelector(".product__btn").disabled = false;

  let currentPrice = parseInt(
    priceWithoutSpaces(
      productParent.querySelector(".cart-product__price").textContent
    )
  );
  minusFullPrice(currentPrice);
  printFullPrice();
  productParent.remove();

  printQuantity();
};
// productBasket.forEach((el) => {
window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-cart")) {
    // el.addEventListener("click", (e) => {
    // console.log(productBasket.closest(".card-product"));
    productBasket.closest(".card-product").setAttribute("data-id", randomId());
    const card = event.target.closest(".card-product");
    let priceString = priceWithoutSpaces(
      card.querySelector(".card-product__price").textContent
    );
    let priceNumber = parseInt(
      priceWithoutSpaces(card.querySelector(".card-product__price").textContent)
    );

    // console.log(card);
    const productInfo = {
      id: card.dataset.id,
      img: card.querySelector(".card-product__image").getAttribute("src"),
      title: card.querySelector(".card-product__title").innerText,
      color: card.querySelector(".card-product__color").innerText,
      vendorcode: card.querySelector(".card-product__vendorcode").innerText,
      size: card.querySelector(".card-product__size").innerText,
      price: card.querySelector(".card-product__price").innerText,
      // counter: card.querySelector("[data-counter]").innerText,

      // printQuantity();
    };
    // console.log(productInfo);
    chipbasketСontentList
      .querySelector(".simplebar-content")
      .insertAdjacentHTML(
        "afterbegin",
        generateCartProduct(
          // id,
          img,
          title,
          price,
          vendorcode,
          color,
          size,
          fullsum
        )
      );
    printQuantity();
    plusFullPrice(priceNumber);
    self.disabled = true;
  }
});
