import axios from 'axios';
import {
    key,
    proxy
} from '../config';

import tmpIngredients from '../data/pizza_ingredients';

export default class Recipe {

    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res =await axios(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            //const res = tmpIngredients;
            this.title = res.data.recipe.title;
            this.autor = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;

        } catch (err) {
            console.log(err)
            alert('Something went wrong :(');
        }
    }

    calcTime() {
        // Assuming that we need 15 min for each 3 ingredients
        const numIng = this.ingredients.length;
        const period = Math.ceil(numIng / 3);
        this.time = period * 15;
    }

    calcServings() {
        this.servings = 4;
    }

    parseIngrerients() {
        const unitMap = new Map();
        unitMap.set('tablespoons', 'tbsp');
        unitMap.set('tablespoon', 'tbsp');
        unitMap.set('ounces', 'oz');
        unitMap.set('ounce', 'oz');
        unitMap.set('teaspoons', 'tsp');
        unitMap.set('teaspoon', 'tsp');
        unitMap.set('cups', 'cup');
        unitMap.set('pounds', 'pound');

        const unitsShort = Array.from(unitMap.values());
        const units = [...unitsShort, 'kg', 'g'];

        const newIngrerians = this.ingredients.map(el => {
            // 1) uniform units
            let ingredient = el.toLowerCase();
            unitMap.forEach((value, key) => {
                ingredient = ingredient.replace(key, value);
            });


            // 2) Remove parenteses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
            // 3) Parse ingredients in to count, unit and ingredient
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(el2 => units.includes(el2));

            let objIng;
            if (unitIndex > -1) {
                //there is a unit
                const arrCount = arrIng.slice(0, unitIndex); //Ex. 4 1/2 cups, arrCount is [4, 1/2]
                let count;
                if (arrCount.length === 1) {
                    count = eval(arrCount[0].replace('-', '+'));
                } else {
                    count = eval(arrCount.join('+'));
                }

                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')
                };

            } else if (parseInt(arrIng[0], 10)) {
                // There NO unit, but 1st element is number
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }

            } else if (unitIndex === -1) {
                //there is NO unit
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient
                }
            }

            return objIng;

        });
        this.ingredients = newIngrerians;
    }

    updateServings(type) {
        // servings
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

        // Ingridirnts
        this.ingredients.forEach(ing => {
            ing.count *= (newServings / this.servings);
        });

        this.servings = newServings;
    }

}