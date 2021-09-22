import Repository from "./Repository.js";

let endpoint = "recipes/findByIngredients";

export default {
    getRecipes(ingredient, amount) {
        endpoint = `${endpoint}?ingredients=${ingredient}&number=${amount}`;
        return Repository.request(endpoint, {});
    },
    hola(){
        console.log("hola");
    }
}