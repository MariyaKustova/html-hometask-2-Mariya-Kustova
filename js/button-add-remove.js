const buttonAdd = document.querySelector(".product__btn-add");
const buttonRemove = document.querySelector(".product__btn-remove");
const inputCountProduct = document.querySelector(".product__input");

(function () {
    const addCountProduct = function (evt) {
        evt.preventDefault();
        let countProduct = Number(inputCountProduct.value);
        countProduct += 1;
        inputCountProduct.value = countProduct;
    };

    const removeCountProduct = function (evt) {
        evt.preventDefault();
        let countProduct = Number(inputCountProduct.value);
        if (countProduct > 0) {
            countProduct -= 1;
            inputCountProduct.value = countProduct;
        }
    };

    if (buttonAdd) {
        buttonAdd.addEventListener("click", addCountProduct);
    }

    if (buttonRemove) {
        buttonRemove.addEventListener("click", removeCountProduct);
    }
})();
