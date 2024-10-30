const period = document.getElementById("period");

var selector = "Initializing..."

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// list of months for visual usage
var ender = "AM"; //sets default ending bit to AM

const schedule1 = [1,2,4]
const schedule2 = [3]
const schedule3 = [5]

function padZero(num) {
    return num < 10 ? '0' + num : num;
} // pads a 0 to the beginning of any number smaller than 10

setInterval(() => {
    const now = new Date();
    const dow = now.getDay();
    const mont = now.getMonth();
    const day = now.getDate();
    let hours = now.getHours();
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds()); // these gather all the time info for raw/display usage

    const month = months[mont]; // selects the month from the array

    if (hours > 12) {
        hourd -= 12;
        ender = "PM"; // checks if its past noon, making it pm
    } else {
        ender = "AM";
    }

    if (hours === 0) {
        hourd = 12; // changes 0, or midnight to say 12 for midnight.
    }

    if(schedule1.includes(dow)) {
        if(hours < 5 && minutes < 55) {
            var selector = "Before School"
        };
        if(hours > 5 && minutes > 55) {
            var selector = "0 Hour"
        };
        if(hours > 6 && minutes > 50) {
            var selector = "Before 1st"
        };
        if(hours > 6 && minutes > 55) {
            var selector = "1st Hour"
        };
        if(hours > 7 && minutes > 50) {
            var selector = "Before 2nd"
        };
        if(hours > 7 && minutes > 55) {
            var selector = "2nd Hour"
        };
        if(hours > 8 && minutes > 50) {
            var selector = "Before 3rd"
        };
        if(hours > 8 && minutes > 55) {
            var selector = "3rd Hour"
        };
        if(hours > 9 && minutes > 55) {
            var selector = "Before 4th / 1st Lunch"
        };
        if(hours > 10 && minutes > 25) {
            var selector = "4th Hour"
        };
        if(hours > 10 && minutes > 55) {
            var selector = "4th Hour / 2nd Lunch"
        };
        if(hours > 11 && minutes > 25) {
            var selector = "Before 5th"
        };
        if(hours > 11 && minutes > 30) {
            var selector = "5th Hour"
        };
        if(hours > 12 && minutes > 25) {
            var selector = "Before 6th"
        };
        if(hours > 12 && minutes > 30) {
            var selector = "6th Hour"
        };
        if(hours > 13 && minutes > 25) {
            var selector = "End of school / Clubs"
        };
        if(hours > 14 && minutes > 25) {
            var selector = "End of school"
        };

    };

    document.getElementById("time").innerHTML = `Today is: ${month} ${day}, ${hours}:${minutes}:${seconds} ${ender}`; // changes the H1
    document.getElementById("title").innerHTML = `${month} ${day}`; // changes title
    period.innerHTML = `${selector}`
}, 250); // updates display every 1/4 of a second
