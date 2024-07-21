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

const generateCartProduct = (img, title, price, id) => {
  return `
		<li class="cart-content__item">
			<article class="cart-content__product cart-product" data-id="${id}">
				<img src="${img}" alt="" class="cart-product__img">
				<div class="cart-product__text">
					<h3 class="cart-product__title">${title}</h3>
					<span class="cart-product__price">${normalPrice(price)}</span>
				</div>
				<button class="cart-product__delete" aria-label="Удалить товар"></button>
			</article>
		</li>
	`;
};
