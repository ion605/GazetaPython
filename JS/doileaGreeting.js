// Get the current date and time
const now = new Date();

// Extract the current hour (0-23)
const hour = now.getHours();

// Initialize a variable to store the greeting message
let greetingMessage;

// Determine the time of day and set the greeting message accordingly
if (hour < 12) {
  greetingMessage = "Bună dimineața! Bun venit in lumea Python.\nVă mulțumesc pentru interesul dumneavoastră.";
} else if (hour >= 12 && hour < 18) {
  greetingMessage = "Bună ziua! Bun venit in lumea Python.\nVă mulțumesc pentru interesul dumneavoastră.";
} else {
  greetingMessage = "Bună seara! Bun venit in lumea Python.\nVă mulțumesc pentru interesul dumneavoastră.\n Noapte bună.";
}

// Display the alert with the determined greeting
alert(greetingMessage);