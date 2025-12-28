let wordCloud = [
  "Hello",
  "hii",
  "how",
  "what",
  "you",
  "yourself",
  "name",
  "victory",
  "food",
  "lovely",
  "beautiful",
  "written",
  "where",
  "who",
  "awesome",
];

let wordsContainer = document.getElementById("wordsContainer");
let errorMsg = document.getElementById("errorMsg");
let userInput = document.getElementById("userInput");
let addBtn = document.getElementById("addBtn");

function appendWord(word) {
  let wordEl = document.createElement("span");
  let rndsize = Math.floor(Math.random() * 50);
  wordEl.classList.add("m-2");
  wordEl.textContent = word;
  wordEl.style.fontSize = rndsize + "px";
  wordsContainer.appendChild(wordEl);
}

for (let word of wordCloud) {
  appendWord(word);
}

addBtn.onclick = function () {
  let newWord = userInput.value;
  if (newWord === "") {
    errorMsg.textContent = "Please enter a word";
    return;
  }
  appendWord(newWord);
};
