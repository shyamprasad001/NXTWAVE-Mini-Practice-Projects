let chatbotMsgList = [
  "Hi",
  "Hey",
  "Good Morning",
  "Good Evening",
  "How can I help you?",
  "Thank You",
];

let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");

function getRandomChatbotMsg() {
  let msgCount = chatbotMsgList.length;

  let randomIndex = Math.floor(Math.random() * msgCount);
  let randomMsg = chatbotMsgList[randomIndex];

  let msgFromChatBotContainer = document.createElement("div");
  msgFromChatBotContainer.classList.add("msg-from-chatbot-container");

  let msgFromChatBot = document.createElement("span");
  msgFromChatBot.classList.add("msg-from-chatbot");
  msgFromChatBot.textContent = randomMsg;

  msgFromChatBotContainer.appendChild(msgFromChatBot);
  chatContainer.appendChild(msgFromChatBotContainer);
}

sendMsgBtn.onclick = function () {
  let userMsg = userInput.value;

  let msgToChatbotContainer = document.createElement("div");
  msgToChatbotContainer.classList.add("msg-to-chatbot-container");

  let msgToChatBot = document.createElement("span");
  msgToChatBot.classList.add("msg-to-chatbot");
  msgToChatBot.textContent = userMsg;

  msgToChatbotContainer.appendChild(msgToChatBot);
  chatContainer.appendChild(msgToChatbotContainer);

  userInput.value = "";
  getRandomChatbotMsg();
};
