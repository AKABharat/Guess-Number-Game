'use strict';

let scoreCounter = 20;
let randomNum = Math.trunc(Math.random() * 20) + 1;
// getting elements from DOM
let inputGuess = document.querySelector('.guess');
let messageDisplay = document.querySelector('.message');
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');

let labelScore = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let numberSymbol = document.querySelector('.number');
let highScoreValue = Number(highScore.textContent);

// user input value evaluation function
checkBtn.addEventListener('click', () => {
  var guessValue = Number(inputGuess.value);
  if (!guessValue) messageDisplay.textContent = '⚠️ No Number';
  else evaluateNumber(guessValue);
});

// function to evaluate the user input value and show the output
const evaluateNumber = function (userNum) {
  let setValue;
  if (userNum === randomNum) {
    messageDisplay.textContent = '🗽 You won the game!';
    numberSymbol.textContent = randomNum;
    checkBtn.setAttribute('disabled', '');
    document.querySelector('body').style.backgroundColor = '#db5dff';
    highscoreHandle();
    return;
  }
  setValue = userNum < randomNum ? '📉 to Low' : '📈 to high';
  messageDisplay.textContent = setValue;
  labelScoreHandle();
};

function labelScoreHandle() {
  scoreCounter = --scoreCounter <= 0 ? 0 : scoreCounter;
  labelScore.textContent = scoreCounter;
  if (scoreCounter <= 0)
    messageDisplay.textContent = '🤹🏻 You lose the game! Please try again';
}

function highscoreHandle() {
  if (scoreCounter > highScoreValue)
    highScore.textContent = highScoreValue = scoreCounter;
}

const resetGame = function () {
  messageDisplay.textContent = 'Start guessing...';
  checkBtn.removeAttribute('disabled');
  document.querySelector('body').style.backgroundColor = '#222';
  randomNum = Math.trunc(Math.random() * 20) + 1;
  labelScore.textContent = 20;
  scoreCounter = 20;
  labelScore.textContent = scoreCounter;
  inputGuess.value = '';
  numberSymbol.textContent = '?';
};

againBtn.addEventListener('click', resetGame);
