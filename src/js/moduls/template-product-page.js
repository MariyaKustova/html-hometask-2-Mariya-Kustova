import { renderFavoriteBtn, substituteCurrency } from './common-template';

export const renderTemplatePageProduct = function ({ name, info, details, picture, price, like }) {
    return `<div class="product__wrapper-img">        
            <img class="product__img" src="http://localhost:3006/${picture.path}" alt=${picture.alt}>
             </div>
    <div class="product__wrapper-description">
        <h2 class="product__header-1">${name}</h2>
        <p>${info}</p>
        <h3 class="product__header-2">Details</h3>
        <p>${details}</p>
        <div class="product__wrapper-control">
            <div class="product__flex">
                <span class="product__price">${substituteCurrency(price.currency)} ${price.value}</span>
                <div class="product__wrapper-input">
                    <button class="product__btn-remove" type="button" aria-label="remove">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 13H5V11H19V13Z" fill="#E97F03" />
                        </svg>
                    </button>
                    <label>
                        <input class="product__input" type="number" value="1" name="count" min="0" />
                    </label>
                    <button class="product__btn-add" type="button" aria-label="add">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E97F03" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="product__flex">
                <button class="product__add-button" type="button" aria-label="add to cart">Add to cart</button>
                ${renderFavoriteBtn(like, "product__favorite-btn")}
            </div>
        </div>
    </div>`
};
