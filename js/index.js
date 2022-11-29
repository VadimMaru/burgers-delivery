
const modalProduct = document.querySelector('.modal_product');
const catalogList = document.querySelector('.catalog__list');

const product = {
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

const modalProductTitle = document.querySelector('.modal-product__title');
const modalProductImage = document.querySelector('.modal-product__image');
const modalProductDescription = document.querySelector('.modal-product__description');
const ingredientsList = document.querySelector('.ingredients__list');
const ingredientsCalories = document.querySelector('.ingredients__calories');
const modalProducPriceCount = document.querySelector('.modal-product__price-count');

modalProductTitle.textContent = product.title;
modalProductImage.src = product.image;
ingredientsCalories.textContent = product.calories;
modalProducPriceCount.textContent = product.price;
modalProductDescription.textContent = product.description;
ingredientsList.textContent = '';

const ingredientsListItems = product.ingredients.map((item) => {
    const li = document.createElement('li');
    li.classList.add('ingredients__item');
    li.textContent = item;
    return li
});

ingredientsList.append(...ingredientsListItems)

catalogList.addEventListener('click' , (event) => {
    const target = event.target;
    if (target.closest('.product__detail')
        || target.closest('.product__image')) {
        modalProduct.classList.add('modal_open');
    }    
});

modalProduct.addEventListener('click' , (event) => {
    const target = event.target
    if (target.closest('.modal__close')
        || target === modalProduct) {
        modalProduct.classList.remove('modal_open');
    }
    
})

