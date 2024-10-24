const period = document.getElementById("period"); 
const month = months[mont + 1]
var months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December']

setInterval(() => {
    const now = new Date();
    const mont = now.getMonth();
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.getElementById("period").innerHTML = `Today is: ${month} ${day}, ${hours}:${minutes}:${seconds}`;
    document.getElementById("title").innerHTML = `${month} ${day}`;
}, 250);