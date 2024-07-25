// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Array of magician's names
var magicians = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];
// Call the function to show the magicians
show_magicians(magicians);
