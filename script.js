// Greet the User
alert("Welcome to our website!");

// Collect the User's Name
let userName = prompt("Please enter your name:");

// Verify the User's Age
let isAdult = confirm("Are you 18 or older?");

// Conditional Output
let messageContainer = document.getElementById('message-container');

if (isAdult) {
    // User is 18 or older
    messageContainer.innerHTML = `<h2>Hello, ${userName}! Welcome to the site.</h2>`;
    console.log(`Hello, ${userName}! Welcome to the site.`);
} else {
    // User is under 18
    messageContainer.innerHTML = `<h2>Sorry, ${userName}, you must be 18 or older to continue.</h2>`;
    console.log(`Sorry, ${userName}, you must be 18 or older to continue.`);
}

// Debugging Information
console.log(`User's Name: ${userName}`);
console.log(`Age Confirmation Status: ${isAdult ? "18 or older" : "Under 18"}`);
