(function () {
    const URL = 'http://localhost:3006/item';

    let products = [];

    const listProduct = window.searchProduct.listProduct;
    const onSubmitHeaderForm = window.searchProduct.onSubmitHeaderForm;
    const renderCardProduct = window.templateIndex.renderCardProduct;
    const renderContent = window.commonTemplate.renderContent;
    
    fetch(URL)
        .then(response => response.json())
        .then(response => {
            const newProducts = response.content;
            products = products.concat(newProducts);
            products.forEach(function (product) {
                renderContent(renderCardProduct, product, listProduct);
            })
            onSubmitHeaderForm(products);
        }
        )
})();

