// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

// Author: [Mudassir Baig]
// Date: [10-4-2024]


function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Example usage:
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));