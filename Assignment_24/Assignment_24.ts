// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// Author: [Mudassir Baig]
// Date: [10-4-2024]


// Tests for equality and inequality with strings
console.log("Test 1: Equality with strings");
console.log("Prediction: true");
console.log("apple" === "apple"); // Prediction: true

console.log("\nTest 2: Inequality with strings");
console.log("Prediction: false");
//console.log("apple" !== "banana"); // Prediction: false

// Tests using the lower case function
console.log("\nTest 3: Lowercase comparison");
console.log("Prediction: true");
console.log("HELLO".toLowerCase() === "hello"); // Prediction: true

// Numerical tests
let a: number = 5;
let b: number = 10;
console.log("\nTest 4: Numerical equality");
console.log("Prediction: false");
console.log(a === b); // Prediction: false

console.log("\nTest 5: Numerical inequality");
console.log("Prediction: true");
console.log(a !== b); // Prediction: true

console.log("\nTest 6: Greater than");
console.log("Prediction: false");
console.log(a > b); // Prediction: false

console.log("\nTest 7: Less than");
console.log("Prediction: true");
console.log(a < b); // Prediction: true

console.log("\nTest 8: Greater than or equal to");
console.log("Prediction: false");
console.log(a >= b); // Prediction: false

console.log("\nTest 9: Less than or equal to");
console.log("Prediction: true");
console.log(a <= b); // Prediction: true

// Tests using "and" and "or" operators
let c: boolean = true;
let d: boolean = false;
console.log("\nTest 10: AND operator");
console.log("Prediction: false");
console.log(c && d); // Prediction: false

console.log("\nTest 11: OR operator");
console.log("Prediction: true");
console.log(c || d); // Prediction: true

// Test whether an item is in an array
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("\nTest 12: Item in array");
console.log("Prediction: true");
console.log(numbers.includes(3)); // Prediction: true

// Test whether an item is not in an array
console.log("\nTest 13: Item not in array");
console.log("Prediction: false");
console.log(numbers.includes(6)); // Prediction: false
