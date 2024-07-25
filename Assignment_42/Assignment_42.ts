// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Author: [Mudassir Baig]
// Date: [10-4-2024]


function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}

// Array of magician's names
const magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];

// Call make_great() with a copy of the array
const greatMagicians: string[] = make_great([...magicians]); // Using the spread operator to create a copy

// Call the function to show the original magicians
console.log("Original Magicians:");
show_magicians(magicians);

// Call the function to show the great magicians
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);