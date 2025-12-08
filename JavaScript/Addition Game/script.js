let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");

let checkButtonElement = document.getElementById("checkButton");
let restartButtonElement = document.getElementById("restartButton");
let gameResultElement = document.getElementById("gameResult");

firstNumberElement.innerText = Math.ceil(Math.random() * 100);
secondNumberElement.innerText = Math.ceil(Math.random() * 100);

checkButtonElement.onclick = function () {
  let userAnswer = userInputElement.value;
  userAnswer = parseInt(userAnswer);
  let firstNumber = parseInt(firstNumberElement.innerText);
  let secondNumber = parseInt(secondNumberElement.innerText);

  if (firstNumber + secondNumber === userAnswer) {
    gameResultElement.innerText = "Congratulations! You got right.";
    gameResultElement.classList.add("game-result");
    gameResultElement.style.backgroundColor = "#028a0f";
  } else {
    gameResultElement.innerText = "Please try again!";
    gameResultElement.classList.add("game-result");
    gameResultElement.style.backgroundColor = "#1e217c";
  }
};
restartButtonElement.onclick = function () {
  userInputElement.value = "";
  gameResultElement.innerText = "";
};
