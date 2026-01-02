let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");
let countDown = 10;
let uniqueId;

function startTimer(event) {
  countDown = countDown - 1;
  timerEl.textContent = countDown;
  if (countDown === 0) {
    timerEl.textContent = "BOOM";
    clearInterval(uniqueId);
  }
}

uniqueId = setInterval(startTimer, 1000);

defuserEl.addEventListener("keydown", function (event) {
  let defuserInputText = defuserEl.value;
  if (
    event.key === "Enter" &&
    defuserInputText === "defuse" &&
    countDown !== 0
  ) {
    clearInterval(uniqueId);
    timerEl.textContent = "You did it";
  }
});
