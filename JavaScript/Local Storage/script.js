let msg = document.getElementById("msg");
let saveBtn = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");

saveBtn.onclick = function () {
  let userInputText = msg.value;
  localStorage.setItem("userInput", userInputText);
};

let storedInputValue = localStorage.getItem("userInput");

if (storedInputValue === null) {
  msg.value = "";
} else {
  msg.value = storedInputValue;
}

clearBtn.onclick = function () {
  localStorage.removeItem("userInput");
  msg.value = "";
};
