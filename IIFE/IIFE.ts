// An IIFE (Immediately Invoked Function Expression) in TypeScript (and JavaScript) is a function that is defined and executed immediately after its creation. This pattern is commonly used to create a private scope, helping to avoid polluting the global namespace and encapsulating variables.

// Key Concepts of IIFE
// Self-Executing Function: An IIFE is a function that is executed right after it is defined.
// Private Scope: Variables defined inside an IIFE cannot be accessed from outside its scope, providing a way to encapsulate functionality.
// Basic Syntax
// Here’s the basic syntax for an IIFE:


(function() {
    // Your code here
})();
// You can also use arrow functions:


(() => {
    // Your code here
})();
// Simple Example of IIFE in TypeScript
// Here's a simple example demonstrating the use of an IIFE:


// Using a traditional function expression IIFE
(function() {
    const message: string = "Hello from IIFE!";
    console.log(message); // Output: Hello from IIFE!
})();

// Using an arrow function IIFE
(() => {
    const greeting: string = "This is an IIFE using arrow function!";
    console.log(greeting); // Output: This is an IIFE using arrow function!
})();

// Trying to access the variable outside the IIFE will cause an error
// console.log(message); // Error: Cannot find name 'message'
// console.log(greeting); // Error: Cannot find name 'greeting'