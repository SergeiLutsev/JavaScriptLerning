import axios from 'axios';
import {key,proxy} from '../config';

export default class Recipe{

        constructor(id){
            this.id = id;
        }

        async getRecipe() {
            try{              
                const res =await axios(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
                this.title = res.data.recipe.title;
                this.autor =  res.data.recipe.publisher;
                this.img = res.data.recipe.image_url;
                this.url = res.data.recipe.source_url;
                this.ingredients = res.data.recipe.ingredients;

            }catch(err){
                console.log(err)
                alert('Something went wrong :(');
            }
        }

        calcTime(){
            // Assuming that we need 15 min for each 3 ingredients
            const numIng = this.ingredients.length;
            const period = Math.ceil(numIng/3);
            this.time =period*15;
        }

        calcServings(){
            this.servings=4;
        }

}