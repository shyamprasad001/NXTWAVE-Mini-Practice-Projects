let arr = [1, 7, 3, 1, 0, 20, 77];
let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");
let spliceBtn = document.getElementById("spliceBtn");
let updatedArray = document.getElementById("updatedArray");

spliceBtn.onclick = function () {
  if (startIndexInput.value === "") {
    alert("Enter start index");
    return;
  }
  if (deleteCountInput.value === "") {
    deleteCountInput.value = 0;
  }

  let startIndexValue = startIndexInput.value;
  let deleteCountvalue = deleteCountInput.value;
  let itemToAddValue = itemToAddInput.value;

  console.log(startIndexValue);
  console.log(deleteCountvalue);
  console.log(itemToAddValue);

  arr.splice(startIndexValue, deleteCountvalue, itemToAddValue);

  JSON.stringify(arr);
  console.log(arr);
  updatedArray.innerHTML = "[" + arr + "]";
};
