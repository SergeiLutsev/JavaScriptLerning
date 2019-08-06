import {
    elements
} from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResultList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
}

export const highlightSelected = (id)=>{
    const resultsArr = Array.from(document.querySelectorAll('.results__link--active'));
    resultsArr.forEach(el =>{
        el.classList.remove('results__link--active');
    });
    document.querySelector(`a[href="#${id}"]`).classList.add('results__link--active');
};

const limitRecipeTitle = (title, limit = 17) => {
    if (title.length <= limit)
        return title;
    const arrWord = title.split(' ');
    let str = '';
    let i = 0;
    while (i < arrWord.length && (str.length + arrWord[i].length) <= limit) {
        str += arrWord[i++] + ' ';
    }
    return str + '...';
}

const limitRecipeTitle2 = (title = '', limit = 17) => {
    if (title.length <= limit) return title;
    let str = title.substr(0, limit);
    if (title.substr(limit) != ' ') {
        str = str.substr(0, str.lastIndexOf(' '));
    }
    return str + '...';
}

const renderRecipe = (recipe) => {
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle2(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;

    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
}

// type: 'prev' or 'next'
const createButton = (page, type) => `

    <button class="btn-inline results__btn--${type}" data-goto=${(type ==='prev')? page-1 : page+1}>
        <span>Page ${(type ==='prev')? page-1 : page+1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${ type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
`;

const renderBattons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);
    let button;
    if (page === 1 && pages > 1) {
        // Only button to go to next page
        button = createButton(page, 'next');
    } else if (page < pages) {
        //both Button
        button = `
                ${createButton(page,'prev')}
                ${createButton(page,'next')}
                `;

    } else if (page === pages && pages > 1) {
        //only button to go to priviose page
        button = createButton(page, 'prev');
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    // render results of current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe);

    // render pagination buttons
    renderBattons(page, recipes.length, resPerPage);
};