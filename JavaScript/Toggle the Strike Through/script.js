let checkBoxWithLabelContainerEl = document.getElementById(
  "checkBoxWithLabelContainer"
);

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkbox";
inputElement.classList.add("checkbox-input");
checkBoxWithLabelContainerEl.appendChild(inputElement);

let checkboxLabelElement = document.createElement("label");
checkboxLabelElement.setAttribute("for", "checkbox");
checkboxLabelElement.id = "checkboxLabel";
checkboxLabelElement.classList.add("checkbox-label");
checkboxLabelElement.textContent = "I am a label";
checkBoxWithLabelContainerEl.appendChild(checkboxLabelElement);
inputElement.onclick = function () {
  checkboxLabelElement.classList.toggle("checked");
};
