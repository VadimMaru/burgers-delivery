import { catalogList, navigationList, navigationListItems } from "./elements.js"

export const navigationListController = () => {
    navigationList.addEventListener('click' , e => {
        const categoryItem = e.target.closest('.navagation__button')
        
        if(!categoryItem) return;

        navigationListItems.forEach((item) => {
            if(item === categoryItem) {
                item.classList.add('navigation__button_active');                    
            } else {item.classList.remove('navigation__button_active');
        }
        })
    })
}