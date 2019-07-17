(function(){
    

// function constractor
var Quesction = function(quest,answers,rightAnsw){
    this.quest = quest;
    this.answers = answers;
    this.rightAnsw = rightAnsw;
    this.checkAnsw = function(idxAnsw){
        return rightAnsw === idxAnsw;
    }
   
}

Quesction.prototype.showQuest = function(){
    console.log(this.quest);
        for(var i = 0; i < this.answers.length; i++){
            console.log('   '+i+': '+this.answers[i]);
        }
}


// global declaration
var quests = [], ask = '', aswScore = [0,0];

// create question list
quests[0] = new Quesction(
                'What is my name?',
                ['Bill','John','Emely','May'],
                '1'
                );
quests[1] = new Quesction(
                'What is the best brand of car in the world?',
                ['Mercedes','BMW','Toyota','Lada'],
                '3'
                );
quests[2] = new Quesction(
                'What is the best Country in the world?',
                ['USA','Matherland','Canada','Russia'],
                '1'
                );

    
    
while(ask  != 'exit'){
    var rnd =Math.floor(Math.random()*quests.length);
    var q=quests[rnd];
    q.showQuest();
    
    ask = prompt('Please enter answer here!!\n (for exit enter "exit")');
    ask = ask;
    var right =q.checkAnsw(ask);
    console.log((right === true ? '++++CORRECT ANSWER++++' : '----INCORRECT ANSWER----'));
    if(right){
        aswScore[0]++;
    } else{
        aswScore[1]++;
    }           
    
    console.log("           SCORE: ");
    console.log('   correct: '+aswScore[0]+'    incorrect: '+aswScore[1]);
    console.log();
    console.log('---------------------------------------------------------------------------');
    console.log();
}
    
    
    
})();

