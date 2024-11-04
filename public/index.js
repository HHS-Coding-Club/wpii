const period = document.getElementById("period");
var selector = "Initializing...";
var months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var ender = "AM"; // Sets default ending bit to AM

function padZero(num) {
    return num < 10 ? "0" + num : num;
} // Pads a 0 to the beginning of any number smaller than 10

function update() {
    const now = new Date();
    const dow = now.getDay(); // Get the current day of the week (0: Sunday, 1: Monday, ..., 6: Saturday)
    const mont = now.getMonth();
    const day = now.getDate();
    let hours = now.getHours();
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());

    const month = months[mont]; // Selects the month from the array
    let hourd = hours; // Initialize hourd
    if (hours >= 12) {
        hourd -= 12;
        ender = "PM"; // Checks if it's past noon, making it PM
    } else {
        ender = "AM";
    }

    if (hourd === 0) {
        hourd = 12; // Changes 0, or midnight to say 12 for midnight
    }

    // Determine the school period
    if (dow === 3) { // Wednesday
        if (hours === 6 && minutes >= 55) {
            selector = "0 Hour";
        } else if (hours === 7 && minutes < 45) {
            selector = "1st Period";
        } else if (hours === 8 && minutes < 15) {
            selector = "Advisory";
        } else if (hours === 9 && minutes < 10) {
            selector = "2nd Period";
        } else if (hours === 10 && minutes < 10) {
            selector = "3rd Period";
        } else if (hours === 11 && minutes < 40) {
            selector = "1st Lunch";
        } else if (hours === 11 && minutes >= 45) {
            selector = "4th Period";
        } else if (hours === 12 && minutes < 5) {
            selector = "4th Period"; // Second block of 4th Period
        } else if (hours === 12 && minutes >= 5 && minutes < 35) {
            selector = "2nd Lunch";
        } else if (hours === 12 && minutes >= 35) {
            selector = "5th Period";
        } else if (hours === 1 && minutes < 25) {
            selector = "6th Period";
        } else if (hours === 2 && minutes < 25) {
            selector = "7th Period";
        } else {
            selector = "After School"; // Default case if none match
        }
    } else if (dow === 5) { // Friday
        if (hours === 6 && minutes >= 55) {
            selector = "0 Hour";
        } else if (hours === 7 && minutes < 40) {
            selector = "1st Period";
        } else if (hours === 8 && minutes < 30) {
            selector = "2nd Period";
        } else if (hours === 9 && minutes < 20) {
            selector = "3rd Period";
        } else if (hours === 10 && minutes < 55) {
            selector = "ONECH (One Lunch)";
        } else if (hours === 11 && minutes < 45) {
            selector = "4th Period";
        } else if (hours === 11 && minutes >= 50) {
            selector = "5th Period";
        } else if (hours === 12 && minutes < 25) {
            selector = "6th Period";
        } else {
            selector = "After School"; // Default case if none match
        }
    } else { // For other days, use your existing logic or set a default
        // Use your previous time checks for other weekdays
        if (hours < 5 || (hours === 5 && minutes < 55)) {
            selector = "Before School";
        } else if (hours === 5 && minutes >= 55) {
            selector = "0 Hour";
        } else if (hours === 6 && minutes < 50) {
            selector = "Before 1st";
        } else if (hours === 6 && minutes >= 55) {
            selector = "1st Hour";
        } else if (hours === 7 && minutes < 50) {
            selector = "Before 2nd";
        } else if (hours === 7 && minutes >= 55) {
            selector = "2nd Hour";
        } else if (hours === 8 && minutes < 50) {
            selector = "Before 3rd";
        } else if (hours === 8 && minutes >= 55) {
            selector = "3rd Hour";
        } else if (hours === 9 && minutes >= 55) {
            selector = "Before 4th / 1st Lunch";
        } else if (hours === 10 && minutes < 25) {
            selector = "4th Hour";
        } else if (hours === 10 && minutes >= 55) {
            selector = "4th Hour / 2nd Lunch";
        } else if (hours === 11 && minutes < 25) {
            selector = "Before 5th";
        } else if (hours === 11 && minutes >= 30) {
            selector = "5th Hour";
        } else if (hours === 12 && minutes < 25) {
            selector = "Before 6th";
        } else if (hours === 12 && minutes >= 30) {
            selector = "6th Hour";
        } else if (hours === 13 && minutes < 25) {
            selector = "End of school / Clubs";
        } else if (hours === 14 && minutes < 25) {
            selector = "End of school";
        } else {
            selector = "After School"; // Default case if none match
        }
    }

    document.getElementById("time").innerHTML = `Today is: ${month} ${day}, ${hourd}:${minutes}:${seconds} ${ender}`; // Changes the H1
    document.getElementById("title").innerHTML = `${month} ${day}`; // Changes title
    period.innerHTML = `${selector}`;
    
    requestAnimationFrame(update);
}

update(); // Start the update loop
