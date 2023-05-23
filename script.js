'use strict';
// select message text content
let secretNumber;
let messageDOM = document.querySelector('.message');
let scoreString = document.querySelector('.score');
let scoreOriginal = Number(scoreString.textContent);
let score = Number(scoreString.textContent);
const body = document.querySelector('body');
const numberDOM = document.querySelector('.number');
const again = document.querySelector('.again');
let guessString = document.querySelector('.guess');
let highscore = 0;

function initialiseGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = scoreOriginal;
  scoreString.textContent = score;
  messageDOM.textContent = 'Start guessing...';
  guessString.value = '';
  numberDOM.textContent = '?';
  body.style.backgroundColor = '#222';
}

initialiseGame();

function displayMessage(message) {
  messageDOM.textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (guessString.value == '') {
    displayMessage('No number input');
  } else if (guess > 20 || guess < 1) {
    displayMessage('Out of range. Please select only numbers from 1 to 20');
  } else {
    if (score > 0) {
      // when win occurs
      if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('Correct number');
        body.style.backgroundColor = '#60b347';
        numberDOM.style.width = '20rem';
        if (highscore < score) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        }
      } else {
        displayMessage(
          (guess > secretNumber ? 'Too high.' : 'Too low.') + 'Please try again'
        );
        score--;
      }
      scoreString.textContent = score;
    }
  }
  if (score == 0) {
    displayMessage('Why did you choose to lose?');
  }
});

// play again
again.addEventListener('click', function () {
  initialiseGame();
});
