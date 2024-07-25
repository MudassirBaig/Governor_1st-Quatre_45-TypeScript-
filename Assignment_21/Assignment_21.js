let countries = [
    {
        name: "USA",
        capital: "Washington D.C.",
        population: 331000000,
        language: "English"
    },
    {
        name: "France",
        capital: "Paris",
        population: 67000000,
        language: "French"
    },
    {
        name: "China",
        capital: "Beijing",
        population: 1403500000,
        language: "Chinese"
    },
    {
        name: "Brazil",
        capital: "Brasília",
        population: 213000000,
        language: "Portuguese"
    },
    {
        name: "India",
        capital: "New Delhi",
        population: 1380000000,
        language: "Hindi, English"
    }
];
// Print the information about each country
console.log("Information about Different Countries:");
for (let country of countries) {
    console.log("Name:", country.name);
    console.log("Capital:", country.capital);
    console.log("Population:", country.population);
    console.log("Language:", country.language);
    console.log("--------------------");
}
export {};
