document.body.classList.add("d-flex", "flex-column", "justify-content-center");

let checkboxcontainerEl = document.getElementById("checkboxWithLabelContainer");
checkboxcontainerEl.classList.add("text-center");
let inputEl = document.createElement("input");
inputEl.type = "checkbox";
inputEl.id = "checkbox";
inputEl.classList.add("checkbox-input");

checkboxcontainerEl.appendChild(inputEl);

let labelEl = document.createElement("label");
labelEl.classList.add("checkbox-label");
labelEl.id = "checkboxLabel";
labelEl.setAttribute("for", "checkbox");
labelEl.textContent = "Click Me!";

checkboxcontainerEl.appendChild(labelEl);
