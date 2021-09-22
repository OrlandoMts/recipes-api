// Aqui obtendre los botones y de mi html y ejecutare las funciones de otros archivos
import recipesRepository from "./repositories/recipesRepository.js";

const btnBuscar = document.getElementById("btnBuscar");

const recipes = async () => {
    try {
        const response = await recipesRepository.getRecipes('apple',1);;
        const data = await response.json();
         console.log(data);
    } catch (error) {
        console.log('FETCH ERROR', error)
    }

}

btnBuscar.addEventListener('click', recipes);