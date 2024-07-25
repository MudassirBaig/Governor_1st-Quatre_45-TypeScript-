// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// Author: [Mudassir Baig]
// Date: [10-4-2024]

// Store the names of guests in an array  --------------------
let guestss: string[] = ["Aliyaar", "Ahad", "Baig", "Mudassir", "Ahmed", "Muhammad", "Talha"];

// Print a personalized message to each guest  -----------------------
for (let i = 0; i < guestss.length; i++) {
    console.log("Dear " + guestss[i] + ", you are invited to dinner.");
}

// Print a message informing about the limited space  ------------------
console.log("Unfortunately, we can only invite two people for dinner.");

// Remove guests from the list until only two names remain  ---------------------------
while (guestss.length > 2) {
    let removedGuest = guestss.pop(); // Remove the last guest  ----------
    console.log("Sorry " + removedGuest + ", we can't invite you to dinner.");
}

// Print a message to each of the two remaining guests  ------------------------------
for (let i = 0; i < guestss.length; i++) {
    console.log("Dear " + guestss[i] + ", you are still invited to dinner.");
}

// Remove the last two names from the list ---------------
guestss.pop();
guestss.pop();

// Print the list to ensure it's empty  -------------
console.log("Final guest list:", guestss);