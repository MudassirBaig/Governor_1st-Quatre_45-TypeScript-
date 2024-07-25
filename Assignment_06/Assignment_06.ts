/*
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/

// Author: [Mudassir Baig]
// Date: [10-4-2024]
let personNameWithWhitespace = "\t\n   Mudsaair Baig   \t\n";
console.log("Name with whitespace:", "'" + personNameWithWhitespace + "'");
let personNameStripped = personNameWithWhitespace.trim();
console.log("Name after stripping whitespace: " + personNameStripped );