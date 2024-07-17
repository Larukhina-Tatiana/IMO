$(
  '<div class="quantity-button quantity-up"><img src="./images/icons/quantity-up.svg" alt="icon plus"></div><div class="quantity-button quantity-down"><img src="./images//icons/quantity-down.svg" alt="icon minus"></div>'
).insertAfter(".quantity input");
$(".quantity").each(function () {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find(".quantity-up"),
    btnDown = spinner.find(".quantity-down"),
    min = input.attr("min"),
    max = input.attr("max");

  btnUp.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });
});

$(".quantity-button").on("click", function () {
  var parents = $(this).parents(".product__info");
  let summ =
    $(".summ", parents).data("product__sum") *
      $(".product__sum", parents).val() +
    $(".product__sum", parents).data("guests") * $(".guests", parents).val();
  $(".product__sum", parents).html("$ " + summ + " грн.");
  console.log(".sum");
});
