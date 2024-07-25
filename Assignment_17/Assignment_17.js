// Store the names of guests in an array
let guestss = ["Aliyaar", "Ahad", "Baig", "Mudassir", "Ahmed", "Muhammad", "Talha"];
// Print a personalized message to each guest
for (let i = 0; i < guestss.length; i++) {
    console.log("Dear " + guestss[i] + ", you are invited to dinner.");
}
// Print a message informing about the limited space
console.log("Unfortunately, we can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (guestss.length > 2) {
    let removedGuest = guestss.pop(); // Remove the last guest
    console.log("Sorry " + removedGuest + ", we can't invite you to dinner.");
}
// Print a message to each of the two remaining guests
for (let i = 0; i < guestss.length; i++) {
    console.log("Dear " + guestss[i] + ", you are still invited to dinner.");
}
// Remove the last two names from the list
guestss.pop();
guestss.pop();
// Print the list to ensure it's empty
console.log("Final guest list:", guestss);
export {};
