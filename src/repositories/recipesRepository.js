import Repository from "./Repository.js";

let endpoint = "recipes/findByIngredients";

export default {
    getRecipes(ingredient, amount) {
        let url = `${endpoint}?ingredients=${ingredient}&number=${amount}`;
        return Repository.request(url, {});
    },
}