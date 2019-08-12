export default class Likes{
    constructor(){
        this.likes=[];
    }

    addLike(id,title,author,img){
        const like={
            id,
            title,
            author,
            img
        }
        this.likes.push(like);

        // Persist the data in local storage
        this.persistData();
        return like;
    }

    deleteLIke(id){
        const idx = this.likes.findIndex(e => e.id===id);
        this.likes.splice(idx,1);
        // Persist the data in local storage
        this.persistData();
    }

    isLiked(id){
        return this.likes.findIndex(e => e.id === id) !== -1;
    }

    getNumberLikes(){
        return this.likes.length;
    }

    persistData(){
        localStorage.setItem('Likes',JSON.stringify(this.likes));
    }

    readStorage(){
       const storage =JSON.parse(localStorage.getItem('Likes'));
       if(storage){
           this.likes = storage;
       }
    }
}