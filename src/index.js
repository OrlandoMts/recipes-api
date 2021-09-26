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
        const response = await recipesRepository.getRecipes(verify(),4);
        const data = await response.json();

        const recipes = data.map(function(recipe) {
            return recipe;
        });

        show(recipes);

    } catch (error) {
        console.log('FETCH ERROR', error)
    }
}

// const show = (recipes) => {
//     const div = document.createElement('div')
//     for (let i = 1; i < recipes.length; i++) {
//         div.textContent = recipes[i].title;
//         resultRecipes.appendChild(div);
//     }
// }

const show = (recipes) => {
    return recipes.forEach(recipe => {
        resultRecipes.textContent += `Receta: ${recipe.title}`;
    });
}

btnBuscar.addEventListener('click', recipes);