let userInput = document.getElementById("userInput");
let keyCodeList = document.getElementById("keyCodeList");

function appendKeyList(event) {
  let keyElement = document.createElement("li");
  keyElement.classList.add("d-flex", "flex-row", "justify-content-start");
  let keyCodeValue = event.keyCode;
  keyElement.textContent = keyCodeValue;
  keyCodeList.appendChild(keyElement);
}

userInput.addEventListener("keydown", appendKeyList);
