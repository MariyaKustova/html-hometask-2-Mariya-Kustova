(function () {
    const renderFavoriteBtn = window.commonTemplate.renderFavoriteBtn;
    const renderCurrency = window.commonTemplate.renderCurrency;

    const renderCardProduct = function ({like, picture, name, price}) {
        return `<li class="catalog__item">
    ${renderFavoriteBtn(like, "catalog__favorite-btn")}
    <a class="catalog__link" href="./product-page.html">
        <img src="./img/image.png" alt="${picture.alt}" width="220" height="140">
        <h2 class="catalog__header">${name}</h2>
        <p class="catalog__price">${renderCurrency(price.currency)} ${price.value}</p>
    </a>
</li>`
    };    

    window.templateIndex = {
        renderCardProduct
    };
})();
