let todoList = [
  {
    text: "Learn HTML",
  },
  {
    text: "Learn CSS",
  },
  {
    text: "Learn JavaScript",
  },
];

function createAndAppendTodo(todo) {
  let todoItemsContainerEl = document.getElementById("todoItemsContainer");

  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-items-container", "d-flex", "flex-row");
  todoItemsContainerEl.appendChild(todoElement);

  let inputEl = document.createElement("input");
  inputEl.type = "checkbox";
  inputEl.id = "checkboxInput";
  inputEl.classList.add("checkbox-input");

  todoElement.appendChild(inputEl);

  let labelContainerEl = document.createElement("div");
  labelContainerEl.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainerEl);

  let labelEl = document.createElement("label");
  labelEl.setAttribute("for", "checkboxInput");
  labelEl.classList.add("checkbox-label");
  labelEl.textContent = todo.text;
  labelContainerEl.appendChild(labelEl);

  let deleteElementContainer = document.createElement("div");
  deleteElementContainer.classList.add("delete-icon-container");
  labelContainerEl.appendChild(deleteElementContainer);

  let deleteIconEl = document.createElement("i");
  deleteIconEl.classList.add("delete-icon", "far", "fa-trash-alt");
  deleteElementContainer.appendChild(deleteIconEl);
}

for (let eachTodo of todoList) {
  createAndAppendTodo(eachTodo);
}
