// Higher-order functions in TypeScript (and JavaScript) are functions that can take other functions as arguments or return functions as their result. This concept allows for greater flexibility and the ability to create more abstract and reusable code.

// Key Concepts of Higher-Order Functions
// Functions as First-Class Citizens: In TypeScript, functions can be treated like any other variable, meaning they can be passed around as arguments, returned from other functions, and assigned to variables.
// Composition: Higher-order functions can be used to compose behaviors or transformations.
// Simple Example of Higher-Order Functions in TypeScript
// Here’s a straightforward example demonstrating how higher-order functions work in TypeScript:


// A higher-order function that takes another function as an argument
function createMultiplier(factor: number) {
    return function (num: number): number {
        return num * factor; // Multiply the input by the factor
    };
}

// Using the higher-order function
const double = createMultiplier(2); // Create a function to double numbers
const triple = createMultiplier(3); // Create a function to triple numbers

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15