function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    items.forEach(function (item) { return console.log("- " + item); });
    console.log("Enjoy your sandwich!");
}
// Call the function with different number of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich("Turkey", "Swiss Cheese");
