import {
    modalProduct,
    catalogList,
    } from './elements.js'

    import { openModal } from './openModal.js';

import { createCardProduct } from './createCardProduct.js';
import { renderListProduct } from './renderListProduct.js';
    
const maxBurger = {
    title: 'Много мяса',
    price: 10000,
    weight: 5000,
    calories: 15000,
    description: 'Огромный бургер, сьещь сам или поделись с компанией',
    image: 'img/megaburger.jpg',
    ingredients: [
        'Пшеничная булочка',
        'Мега котлета из говядины',
        'Много сыра',   
        'Много салата', 
        'Соус барбекю'
    ]
};

catalogList.textContent = '';

const card = [
    createCardProduct(maxBurger),
    createCardProduct(maxBurger),
    createCardProduct(maxBurger),
    createCardProduct(maxBurger),
    createCardProduct(maxBurger),
    createCardProduct(maxBurger),
    createCardProduct(maxBurger)
];

catalogList.append(...card)

catalogList.addEventListener('click' , (event) => {
    const target = event.target;
    if (target.closest('.product__detail')
        || target.closest('.product__image')) {
        openModal(maxBurger)    
    }    
});

modalProduct.addEventListener('click' , (event) => {
    const target = event.target
    if (target.closest('.modal__close')
        || target === modalProduct) {
        modalProduct.classList.remove('modal_open');
    }
    
})

const init = () => {
    renderListProduct();
};

init();

