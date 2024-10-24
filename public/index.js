const period = document.getElementById("period"); 

setInterval(() => {
    const now = new Date();
    const month = now.getMonth();
    const monthname = months[month];
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const months = [ "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December" ];

    document.getElementById("period").innerHTML = `Today is: ${monthname} ${day}, ${hours}:${minutes}:${seconds}`;
    document.getElementById("title").innerHTML = `${monthname} ${day}`;
}, 250);