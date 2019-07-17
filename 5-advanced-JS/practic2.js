(function(){
var Question = function(question,answers,correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.showQuestion = function(){
    console.log(this.question);
    for(var i=0; i<this.answers.length; i++){
        console.log(' '+i+': '+this.answers[i]);
    }
}

Question.prototype.checAnswer = function(answ,callBack){
    var sc;
    if(this.correct === answ){
        console.log('Answer correct!!!');
        sc=callBack(true);
    }else{
        console.log('Wrtong answer! try agains!');
        sc=callBack(false);
    }
    console.log('CORRECT: '+sc);    
    console.log('--------------------------------------')
}

var questions = [];
questions[0] = new Question(
            'What is my name?',
            ['Bill','John','Emely','May'],
            1
            );
questions[1] = new Question(
            'What is the best brand of car in the world?',
            ['Mercedes','BMW','Toyota','Lada'],
            3
            );
questions[2] = new Question(
            'What is the best Country in the world?',
            ['USA','Matherland','Canada','Russia'],
            1
            );


function score(){
        var sc = 0;
    return function(bool){
        if(bool){
            sc++;
        }
        return sc;   
    }
}

var keepScore =score(); 


function nextQUestion(){
    var rnd = Math.floor(Math.random()*3);
    var q = questions[rnd];
    q.showQuestion();
    
    var ask = prompt('Enter a answer. (\'exit\' - for exit quest)');
    
    if(ask === 'exit'){
        return;
    }
    
    ask = parseInt(ask);
    q.checAnswer(ask,keepScore);
    nextQUestion();
}
    

nextQUestion();

})();
