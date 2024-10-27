// Closures in TypeScript (and JavaScript) are functions that have access to their own scope, the scope of the outer function, and the global scope. Closures are created when an inner function is defined within an outer function and retains access to the outer function’s variables even after the outer function has completed execution.

// Key Concepts of Closures
// Scope: Closures help maintain access to the scope in which they were created.
// Data Encapsulation: They can be used to encapsulate variables and create private data.
// Simple Example of Closures in TypeScript
// Here’s a straightforward example demonstrating how closures work in TypeScript:


function createCounter() {
    let count = 0; // This variable is enclosed in the closure

    return function() {
        count++; // Increment the count
        return count; // Return the current count
    };
}

// Create a counter instance
const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3