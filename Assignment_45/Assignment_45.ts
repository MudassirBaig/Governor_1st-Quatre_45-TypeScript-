// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


// Author: [Mudassir Baig]
// Date: [10-4-2024]

// Define a list of animals
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print out the name of each animal
console.log("Animals:");
for (const animal of animals) {
    console.log(animal);
}

// Print out statements about each animal
console.log("\nAnimal Statements:");
for (const animal of animals) {
    switch (animal) {
        case "Dog":
            console.log(`${animal} would make a great pet.`);
            break;
        case "Cat":
            console.log(`${animal} can be independent companions.`);
            break;
        case "Rabbit":
            console.log(`${animal} are cute and social animals.`);
            break;
        default:
            console.log(`Unknown animal: ${animal}`);
    }
}

// Print out what these animals have in common
console.log("\nAny of these animals would make a great pet!");