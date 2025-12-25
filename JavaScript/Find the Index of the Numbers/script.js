let numbers = [17, 31, 77, 20, 63];

let userInput = document.getElementById("userInput");
let findBtn = document.getElementById("findBtn");
let indexOfNumber = document.getElementById("indexOfNumber");

findBtn.onclick = function () {
  let index = numbers.findIndex(function (num) {
    let value = parseInt(userInput.value);
    if (value === num) {
      return true;
    } else {
      return false;
    }
  });
  indexOfNumber.textContent = index;
};
