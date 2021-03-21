// Your code goes here
const message = document.getElementById("text");


document.addEventListener("DOMContentLoaded", function() {

  message.innerHTML = "This is really cool!";
  
  console.log("The DOM has loaded");
})

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

