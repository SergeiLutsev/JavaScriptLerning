import Search from './models/Search';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listViev from './views/listview'

import {
    elements,
    renderLoader,
    clearLoader
} from './views/base';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes'


/** Global state of the app
 *  - Search object
 *  - Current recipe object
 *  - Shoping list object
 *  - Liked recipes
 */
const state = {};
window.state = state;



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

/**
 * LIST CONTROLLER
 */
const controlList =() => {
    // create a new list if list do not exist
    if(!state.list){
        state.list = new List();
    }
    //Add each ingredients to the list and UI
    state.recipe.ingredients.forEach(el => {
       const item = state.list.addItem(el.count,el.unit,el.ingredient);
       listViev.renderItem(item);
    });
};

/**
 * LIKE CONTROLL
 */

const controlLike =()=>{
    // create new like object
    if(!state.likes){
        state.likes = new Likes();
    }
    const currentId = state.recipe.id;
    if(!state.likes.isLiked(currentId)){
        // add to the state
        const newLike = state.likes.addLike(currentId,state.recipe.title,state.recipe.autor,state.recipe.img);
        // togle the like button

        //add like to UI list
        
    }else{
        //remove from state
        state.likes.deleteLIke(currentId);
        // togle the like button

        //remove like from UI

    }
    console.log(state.likes);

};


//Handle delete and updata list items events
elements.shopingList.addEventListener('click', e =>{
    const id = e.target.closest('.shopping__item').dataset.itemid;

    // Handle the delete button
    if(e.target.matches('.shopping__delete, .shopping__delete *')){
        // delete from state
        state.list.deleteItem(id);
        //delete from UI
        listViev.deleteItem(id);
    }else if(e.target.matches('.shopping__count-value')){
        //up date state list
        const newCount =parseFloat(e.target.value,10);
        state.list.updateCount(id,newCount);
    }
});


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
    }else if(e.target.matches('.recipe__btn--add, .recipe__btn--add *')){
        controlList();
    }else if(e.target.matches('.recipe__love, .recipe__love *')){
        controlLike();
    }
    
});


const l = new List();
window.l = l;