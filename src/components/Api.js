import axios from "axios";

function getProducts(){
    
    return axios.get("https://dummyjson.com/products").then((response) => {
        return response.data.products;
       
    });
    
}
function getProduct(id) {
    return axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
        return response.data;

       
    });
}
export default getProducts;
export {getProduct}