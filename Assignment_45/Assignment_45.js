// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// Author: [Mudassir Baig]
// Date: [10-4-2024]
// Define a list of animals
var animals = ["Dog", "Cat", "Rabbit"];
// Print out the name of each animal
console.log("Animals:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Print out statements about each animal
console.log("\nAnimal Statements:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    switch (animal) {
        case "Dog":
            console.log("".concat(animal, " would make a great pet."));
            break;
        case "Cat":
            console.log("".concat(animal, " can be independent companions."));
            break;
        case "Rabbit":
            console.log("".concat(animal, " are cute and social animals."));
            break;
        default:
            console.log("Unknown animal: ".concat(animal));
    }
}
// Print out what these animals have in common
console.log("\nAny of these animals would make a great pet!");
