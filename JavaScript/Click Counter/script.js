let clickCounterContainerElement = document.getElementById(
  "clickCounterContainer"
);
let counterValueElement = document.getElementById("counterValue");
let incrementBtn = document.getElementById("incrementBtn");

incrementBtn.onclick = function () {
  let previousCounterValue = counterValueElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  counterValueElement.textContent = updatedCounterValue;

  localStorage.setItem("clickCount", updatedCounterValue);
};

let storedCounterValue = localStorage.getItem("clickCount");
if (storedCounterValue !== null) {
  counterValueElement.textContent = storedCounterValue;
} else {
  counterValueElement.textContent = "0";
}
