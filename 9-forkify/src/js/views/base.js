export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResultList: document.querySelector('.results__list'),
    searchRes: document.querySelector('.results'),
    searchResPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe')
};

export const elemrntString = {
    loader: 'loader'
};

export const renderLoader = (parent) =>{
    const loader =`
        <div class="${elemrntString.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    
    parent.insertAdjacentHTML("afterbegin",loader);
};

export const clearLoader =()=>{
   const loder = document.querySelector('.'+elemrntString.loader);
   if(loder){
       loder.parentElement.removeChild(loder);
   }
};