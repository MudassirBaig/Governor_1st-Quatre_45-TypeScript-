// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Author: [Mudassir Baig]
// Date: [10-4-2024]



function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Array of magician's names
let magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];

// Call make_great() to modify the array
make_great(magicians);

// Call the function to show the modified magicians
show_magicians(magicians);