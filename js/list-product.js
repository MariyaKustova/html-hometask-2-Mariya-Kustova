const URL = 'http://localhost:3006/item';

let products = [];

const listProduct = document.querySelector(".catalog__list");



fetch(URL)
    .then(response => response.json())
    .then(response => {
        const newProducts = response.content;
        products = products.concat(newProducts);
        newProducts.forEach(function (product) {
            const newCard = window.template.renderCardProduct(product);
            listProduct.insertAdjacentHTML("beforeend", newCard);
        })
    }
    )


