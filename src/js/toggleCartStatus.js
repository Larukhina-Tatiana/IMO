// отображение статус корзины (пустая / заполненная)
if (document.querySelector(".cart-wrapper")) {
  function toggleCartStatus() {
    // родитель корзины
    const cartWrapper = document.querySelector(".cart-wrapper");

    // Блок с текстом "Корзина пуста" должен иметь атрибут data-cart-empty
    // const cartEmptyBadge = document.querySelector("[data-cart-empty]");

    // console.log(cartWrapper.children.length);
    if (cartWrapper.children.length > 0) {
      console.log(`В корзине ${cartWrapper.children.length} товара`);
      // cartEmptyBadge.classList.add("visually-hidden");
    } else {
      console.log("Ваша корзина пуста");
      // cartEmptyBadge.classList.remove("visually-hidden");
    }
  }
}
