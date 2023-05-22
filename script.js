'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let message = document.querySelector('.message').textContent;
document.querySelector('.guess').value;
console.log(document.querySelector('.guess').value);

let score = 7;
let highScore = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // if Guess is Empty
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No Number !';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // if th player WIN
    else if (guess === secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent = '👌 Correct Number';
      document.querySelector('body').style.backgroundColor = 'green';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }

    // if guess is greader then secNum
    else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '👆 Too High';
        score--;
        document.querySelector('.score').textContent = score;
      }

      // if the  player LOST
      else {
        document.querySelector('.message').textContent = '☹ You Lost The Game';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = 'red';
      }
    }

    // if the secNum is greader then Guess
    else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '👇 Too Low';
        score--;
        document.querySelector('.score').textContent = score;
      }

      // if the player LOST
      else {
        document.querySelector('.message').textContent = '☹ You Lost The Game';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = 'red';
      }
    }
  });

//  AGAIN  button
document.querySelector('.again').addEventListener('click', function () {
  // location.reload();
  score = 7;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  message = document.querySelector('.message').textContent = 'GUESS AGAIN';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
///\\\///\\\///\\\///\\\///\\\///\\\
