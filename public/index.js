const period = document.getElementById("period"); 
const now = new Date();
const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
const hours = now.getHours();
const minutes = now.getMinutes();
period.innerHTML= `Today is day ${day} and the time is ${hours}:${minutes}.`;