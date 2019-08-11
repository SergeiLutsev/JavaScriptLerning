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
        return like;
    }

    deleteLIke(id){
        const idx = this.likes.findIndex(e => e.id===id);
        this.likes.splice(idx,1);
    }

    isLiked(id){
        return this.likes.findIndex(e => e.id === id) !== -1;
    }

    getNumberLikes(){
        return this.likes.length;
    }
}