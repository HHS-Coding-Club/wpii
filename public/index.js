const period = document.getElementById("period");  //for later ;)

var months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December']

setInterval(() => {
    const now = new Date();
    const mont = now.getMonth();
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ender = "AM"

    const month = months[mont] //selects the month from the array
    document.getElementById("period").innerHTML = `Today is: ${month} ${day}, ${hours}:${minutes}:${seconds} ${ender}`; //changes the H1
    document.getElementById("title").innerHTML = `${month} ${day}`; //changes title
    if(hours > 13){
        hours = hours - 12;
        ender = "PM";
    }
    else {
        ender = "AM";
    }
}, 250); //updates display every 1/4 of a second