var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
//numbers.forEach(number => {
for (var i = 0; i < 9; i++) {
    // Determine the ordinal ending based on the number
    var ordinalEnding = void 0;
    if (numbers[i] === 1) {
        ordinalEnding = "st";
    }
    else if (numbers[i] === 2) {
        ordinalEnding = "nd";
    }
    else if (numbers[i] === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    // Print the number with its ordinal ending
    console.log("".concat(numbers[i]).concat(ordinalEnding));
}
;
