let bgColorInputElement = document.getElementById("bgColorInput");
let fontColorInputElement = document.getElementById("fontColorInput");
let fontSizeInputElement = document.getElementById("fontSizeInput");
let fontWeightInputElement = document.getElementById("fontWeightInput");
let paddingInputElement = document.getElementById("paddingInput");
let borderRadiusInputElement = document.getElementById("borderRadiusInput");
let applyButtonElement = document.getElementById("applyButton");
let customButtonElement = document.getElementById("customButton");

applyButtonElement.onclick = function () {
  let InputBgColor = bgColorInputElement.value;
  customButtonElement.style.backgroundColor = InputBgColor;

  let InputFontColor = fontColorInputElement.value;
  customButtonElement.style.color = InputFontColor;

  let InputFontSize = fontSizeInputElement.value;
  customButtonElement.style.fontSize = InputFontSize;

  let InputFontWeight = fontWeightInputElement.value;
  customButtonElement.style.fontWeight = InputFontWeight;

  let InputPadding = paddingInputElement.value;
  customButtonElement.style.padding = InputPadding;

  let InputBorderRadius = borderRadiusInputElement.value;
  customButtonElement.style.borderRadius = InputBorderRadius;
};
