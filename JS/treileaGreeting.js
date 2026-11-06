// Get the current date and time
const now = new Date();

// Extract the current hour (0-23)
const hour = now.getHours();

// Initialize a variable to store the greeting message
let greetingMessage;

// Determine the time of day and set the greeting message accordingly
if (hour < 12) {
    greetingMessage = "Bună dimineața!\nSă-ți fie ziua plină de succese și mintea de înțelepciune!\nNu uita: nu-i poți mulțumi pe toți. Deci, continuă!";
} else if (hour >= 12 && hour < 18) {
    greetingMessage = "Bună ziua!\nSă-ți fie ziua plină de succese și mintea de înțelepciune!\nNu uita: nu-i poți mulțumi pe toți. Deci, continuă!";
} else {
    greetingMessage = "Bună seara!\nNu uita: nu-i poți mulțumi pe toți.\nDeci, continuă. Noapte bună!";
}

// Display the alert with the determined greeting
alert(greetingMessage);