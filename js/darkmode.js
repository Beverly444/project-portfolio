// This is what Chat GPT generated for dark mode functionality and it helps!!!! Now i need to learn what is going on :)

document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById("theme-switch");
    const body = document.body;

    themeSwitch.addEventListener("click", () => {
        body.classList.toggle("darkmode");
    });
});



// BACK TO TOP BUTTON
const backToTopButton = document.getElementById("back-to-top");

// Show button when scrolling down 100px
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// TYPING ANIMATION
const typedText = document.getElementById("typed-text"); // Element where the text will be typed
const cursor = document.getElementById("cursor"); // Cursor element for the typing effect

// Array of text strings to type out
// Initialize variables for typing effect
const textArray = ["Hey there, I'm Bev 👋🏼", "Web Developer in Training 💻✨", "Hola! I'm Bev 🦋", "Lover of Dark Mode 🌒"];
let textArrayIndex = 0; // Index for the current text in the array
let charIndex = 0; // Index for the current character in the text

function type() { // Function to type out the text
  if (charIndex < textArray[textArrayIndex].length) {  // Check if there are more characters to type
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex); // Add the next character to the typed text
    charIndex++; // Move to the next character index
    setTimeout(type, 100); // Call the type function again after a short delay
  } else { // If the entire text has been typed
    setTimeout(erase, 2000); // Wait for 2 seconds before starting to erase
  }
}

function erase() { // Function to erase the typed text
  if (charIndex > 0) { // Check if there are characters to erase
    typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1); // Remove the last character from the typed text
    charIndex--; // Move to the previous character index
    setTimeout(erase, 50); // Call the erase function again after a short delay
  } else { // If the entire text has been erased
    textArrayIndex++; // Move to the next text in the array
    if (textArrayIndex >= textArray.length) textArrayIndex = 0; // Reset to the first text if all texts have been typed
    setTimeout(type, 1000); // Wait for 1 second before starting to type the next text
  }
}

document.addEventListener("DOMContentLoaded", () => { // Start the typing effect when the DOM is fully loaded
  setTimeout(type, 1000); // Start typing after a 1 second delay
});