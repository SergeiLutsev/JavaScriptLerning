import axios from 'axios';
import tempData from '../data/pizza'



export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResult() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key ='84b8096a36326982d3942b20011ce9d4';//'462b1cc8d4f2730081462fbc65136320'; 
        try {
           // const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            console.log(res);
            
            const res = tempData;
            this.results = res.data.recipes;
          
        } catch (error) {
            alert(error);
        }
    }
}