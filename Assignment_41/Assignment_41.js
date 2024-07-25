function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Array of magician's names
var magicians = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];
// Call make_great() to modify the array
make_great(magicians);
// Call the function to show the modified magicians
show_magicians(magicians);
