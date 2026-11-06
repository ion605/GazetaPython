// Get the element by its ID
const paragraf = document.getElementById('year-paragraf');
const picior = document.getElementById('year-picior');

// Check if the element exists before trying to set the text content
if (paragraf) {
    // Set the text content to the current year
    paragraf.textContent = new Date().getFullYear();
}

// Check if the element exists before trying to set the text content
if (picior) {
    // Set the text content to the current year
    picior.textContent = new Date().getFullYear();
}