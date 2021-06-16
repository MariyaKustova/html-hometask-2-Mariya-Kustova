import {renderCardProduct} from './moduls/template-index';
import { renderContent } from './moduls/common-template';
import { listProduct, onKeyUpInputSearch } from './moduls/search-products';

const URL = 'http://localhost:3006/item';

let products = [];

fetch(URL)
    .then(response => response.json())
    .then(response => {
        const newProducts = response.content;
        products = products.concat(newProducts);
        products.forEach(function (product) {
            renderContent(renderCardProduct, product, listProduct);
        })
        onKeyUpInputSearch(products);
    }
    )
