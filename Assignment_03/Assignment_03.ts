/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
// Author: [Mudassir Baig]
// Date: [10-4-2024]
let Anyname: string = "mudassir Baig";

console.log("In Upper Case:" + Anyname.toUpperCase());
console.log("In Lower case:" , Anyname.toLowerCase());
console.log("Title case:", Anyname.charAt(0).toUpperCase() + Anyname.slice(1).toLowerCase());