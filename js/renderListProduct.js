import { API_URL, PREFIX_PRODUCT } from "./const.js"
import { getData } from "./getData.js"
export const renderListProduct = () => {
    getData(`${API_URL}${PREFIX_PRODUCT}`).then(data => console.log(data));
}