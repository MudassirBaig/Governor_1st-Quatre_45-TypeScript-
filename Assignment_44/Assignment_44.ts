// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// Author: [Mudassir Baig]
// Date: [10-4-2024]

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allows arbitrary additional properties
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
    const car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add additional properties
    options.forEach(option => {
        const [key, value] = option;
        car[key] = value;
    });

    return car;
}

// Call the function with required information and additional properties
const myCar: Car = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Print the object to check if all information was stored correctly
console.log(myCar);