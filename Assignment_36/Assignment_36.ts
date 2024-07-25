// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Author: [Mudassir Baig]
// Date: [10-4-2024]

// Function to make a shirt with default parameters
function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
}

// Make a large shirt with the default message
make_shirt();

// Make a medium shirt with the default message
make_shirt("medium");

// Make a shirt of any size with a different message
make_shirt("small", "Hello, AI!");