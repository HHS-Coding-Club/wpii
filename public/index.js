const period = document.getElementById("period");  //for later ;)

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var ender = "AM";

function padZero(num) {
    return num < 10 ? '0' + num : num;
}

setInterval(() => {
    const now = new Date();
    const mont = now.getMonth();
    const day = now.getDate();
    let hours = now.getHours();
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());

    const month = months[mont]; // selects the month from the array

    if (hours > 12) {
        hours -= 12;
        ender = "PM";
    } else {
        ender = "AM";
    }

    if (hours === 0) {
        hours = 12;
    }

    document.getElementById("period").innerHTML = `Today is: ${month} ${day}, ${hours}:${minutes}:${seconds} ${ender}`; // changes the H1
    document.getElementById("title").innerHTML = `${month} ${day}`; // changes title
}, 250); // updates display every 1/4 of a second
