// Promises in TypeScript (and JavaScript) are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a cleaner alternative to callback functions by allowing you to chain operations and handle errors more effectively.

// Key Concepts of Promises
// States: A Promise can be in one of three states:

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

// Methods:
// then(): Used to handle a fulfilled promise.
// catch(): Used to handle a rejected promise.
// finally(): Executes a block of code regardless of the promise's outcome.
// Simple Example of Promises in TypeScript
// Here's a straightforward example demonstrating how to use promises in TypeScript:


// A function that returns a promise
function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        const data = "Hello, World!";
        const success = true; // Simulate success or failure

        // Simulating asynchronous operation with setTimeout
        setTimeout(() => {
            if (success) {
                resolve(data); // Fulfill the promise
            } else {
                reject("Error fetching data"); // Reject the promise
            }
        }, 1000); // 1 second delay
    });
}

// Using the promise
fetchData()
    .then((result) => {
        console.log(result); // Output: Hello, World!
    })
    .catch((error) => {
        console.error(error); // Handle error
    })
    .finally(() => {
        console.log("Promise operation complete."); // Executes regardless of the outcome
    });
