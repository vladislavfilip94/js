'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 12;
document.querySelector('.guess').value;
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number! 😭';
    displayMessage('No Number! 😭');
    // when payer wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = ' Here we go 🥳';
    displayMessage(' Here we go 🥳');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? 'The number is to High! ⬆️'
      //     : 'The number is to Low! ⬇️';
      displayMessage(
        guess > secretNumber
          ? 'The number is to High! ⬆️'
          : 'The number is to Low! ⬇️'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game 🤯';
      displayMessage('You lost the game 🤯');
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is to high
  // }else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         'The number is to High! ⬆️';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game 🤯';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     //when the guess is to low
  //   } else if (guess < secretNumber) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent =
  //         'The number is to Low! ⬇️';

  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game 🤯';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  document.querySelector('.again').addEventListener('click', again);
  function again() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = ' Start guessing 🤔';
    displayMessage(' Start guessing 🤔');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
  }
});
