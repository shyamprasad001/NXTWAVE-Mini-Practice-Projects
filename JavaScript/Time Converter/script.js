let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let errorMsg = document.getElementById("errorMsg");
let timeInSeconds = document.getElementById("timeInSeconds");

function convertToSeconds(event) {
  let timeInHours = hoursInput.value;
  let timeInMinutes = minutesInput.value;
  if (timeInHours === "") {
    errorMsg.textContent = "Please enter a valid number of hours";
  } else if (timeInMinutes === "") {
    errorMsg.textContent = "Please enter a valid number of minutes";
  }
  let timeInSecondsValue = timeInHours * 3600 + timeInMinutes * 60;
  timeInSeconds.classList.add("time-in-seconds");
  timeInSeconds.textContent = timeInSecondsValue + "s";
}
convertBtn.addEventListener("click", convertToSeconds);
