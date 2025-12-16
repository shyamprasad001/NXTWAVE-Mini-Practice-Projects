let groceryList = [
  "Apples",
  "Boost Drink",
  "Butterscotch Ice Cream",
  "Tomato Ketchup",
  "Dairy Milk Chocolates",
  "Pasta",
];

let backgroundContainerEl = document.getElementById("groceryListContainer");
backgroundContainerEl.classList.add("grocerylist-bg-container");

let headingEl = document.createElement("h1");
headingEl.textContent = "Grocery List";
headingEl.classList.add("heading");
backgroundContainerEl.appendChild(headingEl);

let listContainer = document.createElement("ul");
listContainer.classList.add("list-container");
backgroundContainerEl.appendChild(listContainer);

for (let eachItem of groceryList) {
  let listItem = document.createElement("li");
  listItem.textContent = eachItem;
  listContainer.appendChild(listItem);
}
