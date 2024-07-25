let guests = ["Mudassir", "Baig", "Ahad", "Aliyaar"];
for (let i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you are invited to dinner.");
}
console.log("Good news! We found a bigger dinner table.");
guests.unshift("Talha");
// Add one new guest to the middle of the array
guests.splice(Math.ceil(guests.length / 2), 0, "Ahmed");
// Add one new guest to the end of the array using push()
guests.push("Muhammad");
// Print a new set of invitation messages
console.log("\nNew Invitation Sent to Messages:");
for (let i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you are invited to dinner.");
}
export {};
