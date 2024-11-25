const period = document.getElementById("period");
var selector = "Initializing...";
var months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var ender = "AM"; // Default to AM

// Helper function to pad minutes or seconds with a leading zero
function padZero(num) {
    return num < 10 ? "0" + num : num;
}

// Function to compare two times
function timeIsInRange(currentTime, startTime, endTime) {
    return currentTime >= startTime && currentTime <= endTime;
}

function update() {
    const now = new Date();
    const dow = now.getDay(); // Day of the week (0: Sunday, 1: Monday, ..., 6: Saturday)
    const mont = now.getMonth();
    const day = now.getDate();
    let hours = now.getHours();
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());

    const month = months[mont]; // Selects the month
    let hourd = hours; // Initialize hourd
    if (hours >= 12) {
        hourd -= 12;
        ender = "PM"; // Past noon, PM
    } else {
        ender = "AM"; // Before noon, AM
    }

    if (hourd === 0) {
        hourd = 12; // Handle 0 hour (midnight) as 12 AM
    }

    // Convert current time into minutes for easier comparison
    const currentTimeInMinutes = hours * 60 + now.getMinutes();

    // Define period start and end times for each day
    const schedules = {
        1: [ // Monday
            { period: "0 Hour", start: 6 * 60 + 55, end: 7 * 60 }, // 0 Hour
            { period: "1st Period", start: 7 * 60 + 55, end: 8 * 60 + 50 },
            { period: "2nd Period", start: 8 * 60 + 55, end: 9 * 60 + 50 },
            { period: "3rd Period", start: 9 * 60 + 55, end: 10 * 60 + 50 },
            { period: "1st Lunch", start: 10 * 60 + 55, end: 11 * 60 + 25 },
            { period: "4th Period", start: 11 * 60, end: 11 * 60 + 25 }, // Before lunch
            { period: "4th Period", start: 11 * 60 + 30, end: 11 * 60 + 55 }, // After lunch
            { period: "2nd Lunch", start: 11 * 60 + 55, end: 12 * 60 + 25 },
            { period: "5th Period", start: 12 * 60 + 30, end: 13 * 60 + 25 },
            { period: "6th Period", start: 13 * 60 + 30, end: 14 * 60 + 25 },
            { period: "7th Period", start: 14 * 60 + 30, end: 15 * 60 + 25 }
        ],
        2: [ // Tuesday
            // Same schedule as Monday
        ],
        3: [ // Wednesday
            { period: "0 Hour", start: 6 * 60 + 55, end: 7 * 60 },
            { period: "1st Period", start: 7 * 60 + 55, end: 8 * 60 + 45 },
            { period: "Advisory", start: 8 * 60 + 50, end: 9 * 60 + 15 },
            { period: "2nd Period", start: 9 * 60 + 20, end: 10 * 60 + 10 },
            { period: "3rd Period", start: 10 * 60 + 15, end: 11 * 60 + 10 },
            { period: "1st Lunch", start: 11 * 60 + 15, end: 11 * 60 + 40 },
            { period: "4th Period", start: 11 * 60 + 45, end: 12 * 60 + 5 },
            { period: "2nd Lunch", start: 12 * 60 + 5, end: 12 * 60 + 35 },
            { period: "5th Period", start: 12 * 60 + 40, end: 13 * 60 + 30 },
            { period: "6th Period", start: 13 * 60 + 35, end: 14 * 60 + 25 },
            { period: "7th Period", start: 14 * 60 + 30, end: 15 * 60 + 25 }
        ],
        4: [ // Thursday
            // Same schedule as Monday
        ],
        5: [ // Friday (PLC Schedule)
            { period: "0 Hour", start: 6 * 60 + 55, end: 7 * 60 },
            { period: "1st Period", start: 7 * 60 + 55, end: 8 * 60 + 40 },
            { period: "2nd Period", start: 8 * 60 + 45, end: 9 * 60 + 30 },
            { period: "3rd Period", start: 9 * 60 + 35, end: 10 * 60 + 20 },
            { period: "ONECH (One Lunch)", start: 10 * 60 + 20, end: 10 * 60 + 55 },
            { period: "4th Period", start: 11 * 60, end: 11 * 60 + 45 },
            { period: "5th Period", start: 11 * 60 + 50, end: 12 * 60 + 35 },
            { period: "6th Period", start: 12 * 60 + 40, end: 13 * 60 + 25 }
        ]
    };

    // Loop through the periods for the current day and find the matching period
    const todaySchedule = schedules[dow];
    if (todaySchedule) {
        for (let i = 0; i < todaySchedule.length; i++) {
            const { period: currentPeriod, start, end } = todaySchedule[i];
            if (timeIsInRange(currentTimeInMinutes, start, end)) {
                selector = currentPeriod;
                break;
            }
        }
    }
    // Update the time display
    document.getElementById("time").innerHTML = `Today is: ${month} ${day}, ${hourd}:${minutes}:${seconds} ${ender}`;
    document.getElementById("title").innerHTML = `${hourd}:${minutes}`; // Changes title
    period.innerHTML = `${selector}`;
    requestAnimationFrame(update);
}

update(); // Start the update loop
