import Search from './models/Search';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import {
    elements,
    renderLoader,
    clearLoader
} from './views/base';
import Recipe from './models/Recipe';

/** Global state of the app
 *  - Search object
 *  - Current recipe object
 *  - Shoping list object
 *  - Liked recipes
 */
const state = {};

const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();
    console.log(query);
    if (query) {
        //2) New search object and add to state
        state.search = new Search(query);

        //3) Prerare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        try {
            //4) Search for recipes
            await state.search.getResult();

            //5) Render results on UI
            clearLoader();
            searchView.renderResults(state.search.results);

        } catch (err) {
            alert(err);
            clearLoader();
        }
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault(); // prevent standart events... like reload page
    controlSearch();
});



elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.results, goToPage);
    }
});


/**
 * Recipe controller
 */
const controlRecipe = async () => {
    // get id from URL
    const id = window.location.hash.replace('#', '');
    if (id) {
        // prepere UI changes
        renderLoader(elements.recipe);
        recipeView.cleareResult();
        
        // Highlight selected seach item
        if(state.search){
        searchView.highlightSelected(id);
        }
        // create new recipe object
        state.recipe = new Recipe(id);

        try {
            // get recipe data and parse ingredians
            await state.recipe.getRecipe();
            state.recipe.parseIngrerients();
            // calculate servising and time
            state.recipe.calcTime();
            state.recipe.calcServings();
            // render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);
        } catch (err) {
            alert('Error proccessing recipe');
        }
    }
};

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load',controlRecipe);

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

// handling recipe buttons clicks
elements.recipe.addEventListener('click', e =>{
    if(e.target.matches('.btn-decrease, .btn-decrease *')){
        // Decrrase button cliced
        if(state.recipe.servings>1){       
        state.recipe.updateServings('dec');
        recipeView.updateServingsIngridients(state.recipe);
        }
    }else if(e.target.matches('.btn-increase, .btn-increase *')){
        // increase button cliced
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngridients(state.recipe);
    }
    console.log(state.recipe);
});
