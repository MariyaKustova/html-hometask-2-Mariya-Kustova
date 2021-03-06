(function () {
    const renderFavoriteBtn = window.commonTemplate.renderFavoriteBtn;
    const renderCurrency = window.commonTemplate.renderCurrency;

    const renderCardProduct = function ({like, picture, name, price}) {
        return `<li class="catalog__item">
    ${renderFavoriteBtn(like, "catalog__favorite-btn")}
    <a class="catalog__link" href="./product-page.html">
        <img class="catalog__img" src="http://localhost:3006/${picture.path}" alt="${picture.alt}">
        <h2 class="catalog__header">${name}</h2>
        <p class="catalog__price">${renderCurrency(price.currency)} ${price.value}</p>
    </a>
</li>`
    };    

    window.templateIndex = {
        renderCardProduct
    };
})();
