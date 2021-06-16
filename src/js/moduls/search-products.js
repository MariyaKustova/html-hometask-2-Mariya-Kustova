import {renderCardProduct} from './template-index';

const inputSearch = document.querySelector(".header__input");
export const listProduct = document.querySelector(".catalog__list");

const renderFilteredList = (products) => {
    const userRequest = inputSearch.value;
    const filteredArray = products.filter(product => product.name === inputSearch.value);
    listProduct.children.forEach(function (elem) {
        elem.remove();
    })
    filteredArray.forEach(function (product) {
        renderCardProduct(product, listProduct);
    })
}

const debounce = function ( products ) {
    let timeout;
    return function() {
        clearTimeout( timeout );
        timeout = setTimeout( renderFilteredList(products), 2000 );
    }
}

export const onKeyUpInputSearch = (products) => {
    inputSearch.addEventListener("keyup", debounce(products));
}
