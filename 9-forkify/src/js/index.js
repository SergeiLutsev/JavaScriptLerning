
import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';

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
    e.preventDefault(); // prevent stundart events... like reload page
    controlSearch();
});






//84b8096a36326982d3942b20011ce9d4 
//https://www.food2fork.com/api/search
//https://www.food2fork.com/api/get