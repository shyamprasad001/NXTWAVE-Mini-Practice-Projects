let stopButtonElement = document.getElementById("stopButton");
let readyButtonElement = document.getElementById("readyButton");
let goButtonElement = document.getElementById("goButton");

let stopLightElement = document.getElementById("stopLight");
let readyLightElement = document.getElementById("readyLight");
let goLightElement = document.getElementById("goLight");

function changeColortoRed() {
  stopButtonElement.style.backgroundColor = "#cf1124";
  readyButtonElement.style.backgroundColor = "#1f1d41";
  goButtonElement.style.backgroundColor = "#1f1d41";
  stopLightElement.style.backgroundColor = "#cf1124";
  readyLightElement.style.backgroundColor = "#4b5069";
  goLightElement.style.backgroundColor = "#4b5069";
}

function changeColortoYellow() {
  readyButtonElement.style.backgroundColor = "#f7c948";
  stopButtonElement.style.backgroundColor = "#1f1d41";
  goButtonElement.style.backgroundColor = "#1f1d41";
  readyLightElement.style.backgroundColor = "#f7c948";
  stopLightElement.style.backgroundColor = "#4b5069";
  goLightElement.style.backgroundColor = "#4b5069";
}

function changeColortoGreen() {
  readyButtonElement.style.backgroundColor = "#1f1d41";
  stopButtonElement.style.backgroundColor = "#1f1d41";
  goButtonElement.style.backgroundColor = "#199473";
  readyLightElement.style.backgroundColor = "#4b5069";
  stopLightElement.style.backgroundColor = "#4b5069";
  goLightElement.style.backgroundColor = "#199473";
}
