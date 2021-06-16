import onClickBtnControll from './moduls/button-add-remove';
import {renderContent} from './moduls/common-template';
import renderTemplatePageProduct from './moduls/template-product-page';

const URL = 'http://localhost:3006/item/:itemId';

let products = {};

const sectionProduct = document.querySelector(".product");

fetch(URL)
    .then(response => response.json())
    .then(response => {
        const product = response.content;
        renderContent(renderTemplatePageProduct, product, sectionProduct);
        onClickBtnControll();
    })
