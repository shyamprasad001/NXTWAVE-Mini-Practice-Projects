let cartContainerEl = document.getElementById("cartContainer");

let cartItemTextInputEl = document.getElementById("cartItemTextInput");
let addBtnEl = document.getElementById("addBtn");

function createAndAppendItem(item) {
  let cartItemsListContainer = document.createElement("ul");
  cartItemsListContainer.classList.add("cart-items-container");
  cartContainerEl.appendChild(cartItemsListContainer);

  let cartItem = document.createElement("li");
  cartItem.classList.add("cart-item-container");
  cartItemsListContainer.appendChild(cartItem);

  let labelElement = document.createElement("label");
  labelElement.textContent = item.text;
  cartItem.appendChild(labelElement);
}

function onAddItem() {
  let userInputElement = document.getElementById("cartItemTextInput");
  let userInputValue = userInputElement.value;

  let newItem = {
    text: userInputValue,
  };
  createAndAppendItem(newItem);
  userInputElement.value = "";
}

addBtnEl.onclick = function () {
  onAddItem();
};
