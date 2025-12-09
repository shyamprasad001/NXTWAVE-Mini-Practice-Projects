let bgColorsArray = [
  "#e75d7c",
  "#b16cef",
  "#53cca4",
  "#efc84d",
  "#628ef0",
  "#184b73",
  "#883e7f",
  "#ed048b",
];
let bgContainerElement = document.getElementById("bgContainer");
let buttonElement = document.getElementById("button");

let arraylength = bgColorsArray.length;
buttonElement.onclick = function () {
  let currentColorIndex = Math.random() * arraylength;
  currentColorIndex = Math.floor(currentColorIndex);
  bgContainerElement.style.backgroundColor = bgColorsArray[currentColorIndex];
};
