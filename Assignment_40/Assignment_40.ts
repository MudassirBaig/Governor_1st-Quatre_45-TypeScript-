// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


// Author: [Mudassir Baig]
// Date: [10-4-2024]

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Array of magician's names
const magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];

// Call the function to show the magicians
show_magicians(magicians);