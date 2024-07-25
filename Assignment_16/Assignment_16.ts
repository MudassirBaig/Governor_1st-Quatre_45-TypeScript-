// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Author: [Mudassir Baig]
// Date: [10-4-2024]

let guests: string[] = ["Mudassir", "Baig", "Ahad", "Aliyaar"];
for (let i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you are invited to dinner.");
}
console.log("Good news! We found a bigger dinner table.");


guests.unshift("Talha");

// Add one new guest to the middle of the array -------------------
guests.splice(Math.ceil(guests.length / 2), 0, "Ahmed");

// Add one new guest to the end of the array using push()  --------------------------
guests.push("Muhammad");

// Print a new set of invitation messages  ------------------
console.log("\nNew Invitation Sent to Messages:");
for (let i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you are invited to dinner.");
}