
import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';
import Recipe from './models/Recipe';

/** Global state of the app
 *  - Search object
 *  - Current recipe object
 *  - Shoping list object
 *  - Liked recipes
 */
const state = {};

const controlSearch = async () =>{
    // 1) Get query from view
    const query = searchView.getInput();
    console.log(query);
    if(query){
        //2) New search object and add to state
        state.search = new Search(query);

        //3) Prerare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        //4) Search for recipes
       await state.search.getResult();

        //5) Render results on UI
        clearLoader();
        searchView.renderResults(state.search.results);
    }
};

elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault(); // prevent standart events... like reload page
    controlSearch();
});



elements.searchResPages.addEventListener('click', e =>{
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = parseInt(btn.dataset.goto,10);
        searchView.clearResults();
        searchView.renderResults(state.search.results,goToPage);
    }   
});


/**
* Recipe controller
*/

const r = new Recipe(46956);
 r.getRecipe();
console.log(r);


