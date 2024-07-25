// Define two variables for comparison
let x = 5;
let y = 10;
// Test 1: Check if x is equal to y
console.log("Test 1: Is x equal to y?");
console.log("Prediction: false");
console.log(x === y); // Prediction: false
// Test 2: Check if x is not equal to y
console.log("\nTest 2: Is x not equal to y?");
console.log("Prediction: true");
console.log(x !== y); // Prediction: true
// Test 3: Check if x is greater than y
console.log("\nTest 3: Is x greater than y?");
console.log("Prediction: false");
console.log(x > y); // Prediction: false
// Test 4: Check if x is less than y
console.log("\nTest 4: Is x less than y?");
console.log("Prediction: true");
console.log(x < y); // Prediction: true
// Test 5: Check if x is greater than or equal to y
console.log("\nTest 5: Is x greater than or equal to y?");
console.log("Prediction: false");
console.log(x >= y); // Prediction: false
// Test 6: Check if x is less than or equal to y
console.log("\nTest 6: Is x less than or equal to y?");
console.log("Prediction: true");
console.log(x <= y); // Prediction: true
console.log("\nTest 7: is addition of x and y greater then subtraction of x and y");
console.log("Prediction: true");
console.log(x + y > x - y);
console.log("\nTest 8: is multipliation of x and y less then diveion of x and y");
console.log("Prediction: false");
console.log(x * y < x / y);
console.log("\nTest 9: is multipliation of x and y are equals to multiplication of x and y");
console.log("Prediction: true");
console.log(x * y === x * y);
console.log("\nTest 10: is multipliation of x and y are  not equals to multiplication of x and y");
console.log("Prediction: false");
console.log(x * y !== x * y);
export {};
