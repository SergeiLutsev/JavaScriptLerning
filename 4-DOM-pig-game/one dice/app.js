/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, roundScore, activePlayer, gamePlaying, dices, winningScore;
init();


function init(){
    score = [0,0];
    dices = [0,0];
    roundScore = 0;
    activePlayer = 0;
    winningScore = document.getElementById('winnerScore').value;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    gamePlaying=true;
}

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(!gamePlaying){return;}
    //1 Random number
   var dice = Math.floor(Math.random()*6)+1;
    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    dices[1] = dices[0];
    dices[0] = dice;
    //3. update the round score IF the rolled number was Not a 1
    
    if(dices[0]===dices[1] && dice === 6){
        shiftPlayer();
        
    }else{
    //Add score
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    }
    
});

function shiftPlayer(){
        //Next plaer
        document.getElementById('current-'+activePlayer).textContent='0';
      //  document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        
        activePlayer = activePlayer===0? 1:0;
        roundScore =0;
        dices =[0,0];
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
        
       // document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
}

document.querySelector('.btn-hold').addEventListener('click', function(){
     winningScore = document.getElementById('winnerScore').value;
    if(!gamePlaying){return;}
    
    score[activePlayer]+=roundScore;
    document.getElementById('score-'+activePlayer).textContent = score[activePlayer];
   
    if(score[activePlayer] >=winningScore){
        document.getElementById('name-'+activePlayer).textContent = 'WINNER!!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
        gamePlaying = false;
    }else{
        shiftPlayer();
         }
     
    
});


document.querySelector('.btn-new').addEventListener('click',init);

//document.querySelector('#current-'+activePlayer).textContent = dice;

//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>';


//var x = document.querySelector('#score-0').textContent;

