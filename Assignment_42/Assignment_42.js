var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}
// Array of magician's names
var magicians = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];
// Call make_great() with a copy of the array
var greatMagicians = make_great(__spreadArray([], magicians, true)); // Using the spread operator to create a copy
// Call the function to show the original magicians
console.log("Original Magicians:");
show_magicians(magicians);
// Call the function to show the great magicians
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
