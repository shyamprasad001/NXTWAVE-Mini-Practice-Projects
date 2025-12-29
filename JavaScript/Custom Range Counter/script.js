let fromUserInput = document.getElementById("fromUserInput");
let toUserInput = document.getElementById("toUserInput");
let counterText = document.getElementById("counterText");
let startBtn = document.getElementById("startBtn");

function rangeCounter() {
  let fromValue = fromUserInput.value;
  let toValue = toUserInput.value;

  if (fromValue === "") {
    alert("Enter the from value");
    return;
  } else if (toValue === "" && fromValue !== "") {
    alert("Enter the to value");
    return;
  }
  fromValue = parseInt(fromValue);
  toValue = parseInt(toValue);

  counterText.textContent = fromValue;

  let uniqueId = setInterval(function () {
    fromValue = fromValue + 1;
    counterText.textContent = fromValue;
    if (fromValue === toValue) {
      clearInterval(uniqueId);
    }
  }, 1000);
}
startBtn.addEventListener("click", rangeCounter);
