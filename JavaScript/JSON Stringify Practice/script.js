let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
  name: "Rahul",
  age: 25,
  gender: "Male",
};
let todos = [
  {
    todo: "Attending CCBP sessions",
    todoStatus: "Completed",
  },
  {
    todo: "Completing practice sets",
    todoStatus: "Not Completed",
  },
  {
    todo: "Asking doubts",
    todoStatus: "Completed",
  },
];

let jsonContainer = document.getElementById("jsonContainer");

let stringifiedBikes = JSON.stringify(bikes);
let stringifiedPerson = JSON.stringify(person);
let stringifiedTodos = JSON.stringify(todos);

let stringifiedBikesContainer = document.createElement("div");
stringifiedBikesContainer.classList.add("StringfiedEle-container");
stringifiedBikesContainer.textContent = stringifiedBikes;
jsonContainer.appendChild(stringifiedBikesContainer);

let stringifiedPersonContainer = document.createElement("div");
stringifiedPersonContainer.classList.add("StringfiedEle-container");
stringifiedPersonContainer.textContent = stringifiedPerson;
jsonContainer.appendChild(stringifiedPersonContainer);

let stringifiedTodosContainer = document.createElement("div");
stringifiedTodosContainer.classList.add("StringfiedEle-container");
stringifiedTodosContainer.textContent = stringifiedTodos;
jsonContainer.appendChild(stringifiedTodosContainer);
