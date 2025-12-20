let orderedItemsContainerElement = document.getElementById(
  "orderedItemsContainer"
);
let itemsContainerElement = document.getElementById("itemsContainer");

let itemList = [
  {
    itemName: "Veg Biryani",
    uniqueNo: 1,
  },
  {
    itemName: "Chicken 65",
    uniqueNo: 2,
  },
  {
    itemName: "Paratha",
    uniqueNo: 3,
  },
];

function removeItems(itemId) {
  let itemElement = document.getElementById(itemId);
  itemsContainerElement.removeChild(itemElement);
}

function createAndAppendItem(item) {
  let itemId = "item" + item.uniqueNo;
  let buttonId = "button" + item.uniqueNo;

  let itemElement = document.createElement("li");
  itemElement.id = itemId;
  itemElement.classList.add("item", "d-flex", "flex-row", "align-items-center");

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", buttonId);
  labelElement.classList.add("item-label");
  labelElement.textContent = item.itemName;
  itemElement.appendChild(labelElement);

  let buttonElement = document.createElement("button");
  buttonElement.id = buttonId;
  buttonElement.classList.add("btn", "btn-danger");
  buttonElement.textContent = "Cancel";
  itemElement.appendChild(buttonElement);

  itemsContainerElement.appendChild(itemElement);

  buttonElement.onclick = function () {
    removeItems(itemId);
  };
}

for (let item of itemList) {
  createAndAppendItem(item);
}
