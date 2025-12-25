let greeting =
  '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsedGreeting = JSON.parse(greeting);

let greetFrom = document.getElementById("greetFrom");
let greetTo = document.getElementById("greetTo");
let greetingText = document.getElementById("greetText");

greetFrom.textContent = "From: " + parsedGreeting.from;
greetTo.textContent = "To: " + parsedGreeting.to;
greetingText.textContent = parsedGreeting.greetText;
