// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Author: [Mudassir Baig]
// Date: [10-4-2024]
// List of current usernames
var current_users = ["Admin", "Mudassir", "Ahad", "Alyaar", "Baig"];
// List of new usernames
var new_users = ["Ahad", "Talha", "Muhammad", "Umar", "Fahad"];
// Loop through new_users to check for unique usernames
for (var i = 0; i < 5; i++) {
    // Check if new_username is already in current_users
    if (current_users.includes(new_users[i])) {
        console.log("Sorry, the username '".concat(new_users[i], "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_users[i], "' is available."));
    }
}
