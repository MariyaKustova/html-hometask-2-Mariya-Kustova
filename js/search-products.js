(function () {
    const headerForm = document.querySelector(".header__form");
    const inputSearch = headerForm.querySelector(".header__input");
    const listProduct = document.querySelector(".catalog__list");
    const renderCatalog = window.templateIndex.renderCatalog;

    const onSubmitHeaderForm = function (products) {
        headerForm.addEventListener("submit", function (evt) {
            evt.preventDefault();
            const userRequest = inputSearch.value;
            const filteredArray = products.filter(product => product.name === inputSearch.value);
            Array.from(listProduct.children).forEach(function (elem) {
                elem.remove();
            })
            filteredArray.forEach(function (product) {
                renderCatalog(product, listProduct);
            })
        });
    };

    window.searchProduct = {
        listProduct,
        onSubmitHeaderForm
    }
})();
