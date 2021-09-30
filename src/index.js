// Aqui obtendre los botones y de mi html y ejecutare las funciones de otros archivos
import recipesRepository from "./repositories/recipesRepository.js";

const btnBuscar = document.getElementById("btnBuscar");
const radioButtons = document.querySelectorAll(".ingredients--form-label");
const resultRecipes = document.getElementById("resultRecipe");

function verify() {
    const isCheck = Array.prototype.filter.call(radioButtons, (element) => element.checked);
    let radioValue = isCheck.map(el => el.value);
    let ingredient = radioValue.shift();
    return ingredient;
  }

const recipes = async () => {
    // Obtener el valor de verify y pasarselo a la funcion getRecipes
    try {
        const response = await recipesRepository.getRecipes(verify(),5);
        const data = await response.json();

        const recipes = data.map(function(recipe) {
            return recipe;
        });
        resultRecipes.innerHTML = "";
        show(recipes);

    } catch (error) {
        console.log('FETCH ERROR', error)
    }
}

const show = (recipes) => {
    recipes.forEach(recipe => {
        resultRecipes.innerHTML += `
        <div class="content--recipes-card">
            <img class="item-img" src="${recipe.image}" alt="">
            <div>
                <p class="item-title"> Recipe: ${recipe.title} </p>
                <p class="item-title"> Desc: ${recipe.missedIngredients[0].original} </p>
            </div>
        </div>`;
    });
}

btnBuscar.addEventListener('click', recipes);