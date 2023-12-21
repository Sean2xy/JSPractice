'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const diceL = document.querySelector('.dice');

const curr0E = document.getElementById('current--0');
const cur1E = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores,curScore,activePlayer,play;
const init = function() {
  scores=[0,0];
  curScore = 0;
  activePlayer = 0;
  play = true;

  score0.textContent=0;
  score1.textContent=0;
  curr0E.textContent=0;
  cur1E.textContent=0;
  diceL.classList.add('hidden');

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');

};

init();

const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent=0;
  curScore=0;
  activePlayer = activePlayer===0?1:0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};


// roll dice function
btnRoll.addEventListener('click',function() {
  if(play){
    const dice = Math.trunc(Math.random()*6)+1;

    diceL.classList.remove('hidden');
    diceL.src=`dice-${dice}.png`;

    if(dice!==1){
      curScore+=dice;
      document.getElementById(`current--${activePlayer}`).textContent=curScore;
    }else{
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click',function() {

  if(play){
    scores[activePlayer] += curScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

    if(scores[activePlayer]>=10){
      play=false;
      diceL.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else{
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click',init);

