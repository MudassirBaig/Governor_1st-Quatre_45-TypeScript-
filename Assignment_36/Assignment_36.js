// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Function to make a shirt with default parameters
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("A ".concat(size, "-sized shirt will be printed with the message: \"").concat(message, "\"."));
}
// Make a large shirt with the default message
make_shirt();
// Make a medium shirt with the default message
make_shirt("medium");
// Make a shirt of any size with a different message
make_shirt("small", "Hello, OpenAI!");
