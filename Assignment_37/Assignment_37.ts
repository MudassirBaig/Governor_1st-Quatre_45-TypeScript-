// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

// Author: [Mudassir Baig]
// Date: [10-4-2024]

function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi", "Pakistan"); // City and country provided
describe_city("London"); // City provided, default country used
describe_city("New York", "USA"); // City and country provided