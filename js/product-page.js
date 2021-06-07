const URL = 'http://localhost:3006/item/:itemId';

let products = {};

const sectionProduct = document.querySelector(".product");
const renderTemplatePageProduct = window.templatePageProduct.renderTemplatePageProduct;
const renderContent = window.commonTemplate.renderContent;
const onClickBtnControll = window.buttonAddRemove.onClickBtnControll;

fetch(URL)
    .then(response => response.json())
    .then(response => {
        const product = response.content;
        renderContent(renderTemplatePageProduct, product, sectionProduct);
        onClickBtnControll();
    })
