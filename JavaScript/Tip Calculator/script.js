let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");

function calculateTipAndTotal() {
  if (billAmountElement.value === "") {
    errorMessageElement.innerText = "Please Enter a Valid Input.";
    errorMessageElement.style.color = "red";
  } else if (percentageTipElement.value === "") {
    errorMessageElement.innerText = "Please Enter a Valid Input.";
    errorMessageElement.style.color = "red";
  } else if (
    billAmountElement.value === "" &&
    percentageTipElement.textContent === ""
  ) {
    errorMessageElement.innerText = "Please Enter a Valid Input.";
    errorMessageElement.style.color = "red";
  } else {
    errorMessageElement.innerText = "";
    let billAmountValue = billAmountElement.value;
    let percentageTipValue = percentageTipElement.value;

    billAmountValue = parseInt(billAmountValue);
    percentageTipValue = parseInt(percentageTipValue);

    let calculatedTipValue = (percentageTipValue / 100) * billAmountValue;
    let totalAmountValue = billAmountValue + calculatedTipValue;

    tipAmountElement.value = calculatedTipValue;
    totalAmountElement.value = totalAmountValue;
  }
}
