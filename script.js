// Initialize items.
const username = document.getElementById('username');
const savebtn = document.getElementById('save-btn');
const clearbtn = document.getElementById('clear-btn');
const display = document.getElementById('display-name');

if (localStorage.getItem("username")) {display.innerHTML = "Saved name: " + localStorage.getItem("username")}


// Listeners
savebtn.addEventListener('click', function() {
    console.log("Saved!"); // Make sure button works

    if (username.value.trim() === '') {
        display.innerHTML = "Name cannot be blank."
    } else {
        localStorage.setItem("username", username.value); // Update username
        display.innerHTML = "Saved name: " + localStorage.getItem("username")
    }
});

clearbtn.addEventListener('click', function() {
    console.log("Cleared!");
    localStorage.removeItem("username"); // Clear username
    display.innerHTML = "No saved name"
});
