const period = document.getElementById("period"); 

setInterval(() => {
const now = new Date();
const month = now.getMonth();
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
document.getElementById("period").innerHTML= `Today is: ${month} ${day}, ${hours}:${minutes}:${seconds}`;
document.getElementById("title").innerHTML= `${month} ${day}`;
}, 250);