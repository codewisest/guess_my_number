'use strict';
// select message text content
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector('.message');
let scoreString = document.querySelector('.score');
let score = Number(scoreString.textContent);
const body = document.querySelector('body');
const numberDOM = document.querySelector('.number');

document.querySelector('.check').addEventListener('click', function () {
  const guessString = document.querySelector('.guess').value;
  const guess = Number(document.querySelector('.guess').value);
  console.log(secretNumber);

  if (guessString == '') {
    message.textContent = 'No number input';
  } else if (guess > 20 || guess < 1) {
    message.textContent =
      'Out of range. Please select only numbers from 1 to 20';
  } else {
    if (score > 0) {
      // when win occurs
      if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        message.textContent = 'Correct number';
        body.style.backgroundColor = '#60b347';
        numberDOM.style.width = '20rem';
      } else if (guess > secretNumber) {
        message.textContent = 'Too high. Please try again';
        score--;
      } else {
        message.textContent = 'Too low. Please try again';
        score--;
      }
      scoreString.textContent = score;
    }
  }
  if (score == 0) {
    message.textContent = 'Why did you choose to lose?';
  }
});
