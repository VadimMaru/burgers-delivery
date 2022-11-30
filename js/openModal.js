import { 
    ingredientsList, 
    modalProductTitle,
    modalProductImage,
    modalProductDescription,
    ingredientsCalories,
    modalProducPriceCount, 
    modalProduct,
} from "./elements.js";

export const openModal = (product) => {
    

    modalProductTitle.textContent = product.title;
    modalProductImage.src = product.image;
    ingredientsCalories.textContent = `${product.weight}г, ккал ;${product.calories}`;
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
    modalProduct.classList.add('modal_open');
}