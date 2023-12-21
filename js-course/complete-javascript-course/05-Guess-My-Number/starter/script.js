'use strict';
//
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number';
//
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
//
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

// type of the event
// this function will be called as soon as the event happens
let secretNumber = Math.trunc(Math.random()*20)+1;

let highScore = 0;
//state variable
let score = 20;

const disPlayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.again').addEventListener('click',function(){
  score = 20;
  secretNumber = Math.trunc(Math.random()*20)+1;
  // document.querySelector('.message').textContent = 'start guessing';
  disPlayMessage('start guessing');

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width='15rem';
  document.querySelector('body').style.backgroundColor='black';
  document.querySelector('.score').textContent=score;
  document.querySelector('.guess').value = '';

});
document.querySelector('.check').addEventListener('click',function() {
  console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);


  if(!guess){
    // document.querySelector('.message').textContent = 'no number';
    disPlayMessage('no number');


  }else if(secretNumber === guess){
    document.querySelector('.message').textContent = 'correct number';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width='60rem';

    if(score>highScore){
      highScore=score;
      document.querySelector('.highscore').textContent=highScore;
    }

  }else if(secretNumber!==guess){
      if(score>1){
        document.querySelector('.message').textContent = guess<secretNumber?'too low':'too high';
        score--;
        document.querySelector('.score').textContent=score;
      }else{
        document.querySelector('.message').textContent='you lost';
      }
  }
  // else if(guess<secretNumber){
  //   if(score>1){
  //     document.querySelector('.message').textContent='too low';
  //     score--;
  //     document.querySelector('.score').textContent=score;
  //
  //   }else{
  //     document.querySelector('.message').textContent='you lost';
  //   }
  // }else if(guess>secretNumber){
  //   if(score>1){
  //     document.querySelector('.message').textContent = 'too high';
  //     score--;
  //     document.querySelector('.score').textContent=score;
  //   }else{
  //     document.querySelector('.message').textContent='you lost';
  //   }
  // }
});

