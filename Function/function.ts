// In TypeScript, functions work similarly to JavaScript but with added type annotations for parameters and return values. This makes functions more robust and helps catch errors during development.

// Here are the basics of functions in TypeScript:

// 1. Simple Function with Type Annotations
// You can define a function with types for both the parameters and the return value.


function addd(x: number, y: number): number {
    return x + y;
}

console.log(add(5, 3)); // Output: 8
// In this example:

// x and y are both number types.
// The function returns a number, specified with : number after the parameter list.
// 2. Optional Parameters
// You can make parameters optional by adding a ? after the parameter name.


function greete(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}!`;
}

console.log(greet("Alice"));            // Output: Hello, Alice!
console.log(greet("Alice", "Welcome")); // Output: Welcome, Alice!
// 3. Default Parameters
// If you want a parameter to have a default value, you can set it in the parameter list.


function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

console.log(greet("Alice"));             // Output: Hello, Alice!
console.log(greet("Alice", "Welcome"));  // Output: Welcome, Alice!
// 4. Function with No Return Value (void)
// If a function doesn’t return a value, you specify void as the return type.


function logMessaget(message: string): void {
    console.log(message);
}

logMessage("This is a message"); // Output: This is a message
// 5. Arrow Functions
// Arrow functions in TypeScript work the same as in JavaScript but with type annotations.


const multiply = (x: number, y: number): number => x * y;
console.log(multiply(5, 3)); // Output: 15
// 6. Function Type
// You can define a variable with a function type to specify the types of parameters and return values it should accept.


let divide: (a: number, b: number) => number;
divide = (a, b) => a / b;

console.log(divide(10, 2)); // Output: 5
// Example Code Summary

function subtract(x: number, y: number): number {
    return x - y;
}

const adds = (x: number, y: number): number => x + y;

function printMessage(message: string, prefix: string = "Info"): void {
    console.log(`${prefix}: ${message}`);
}

console.log(subtract(10, 5)); // Output: 5
console.log(add(10, 5));      // Output: 15
printMessage("All systems go"); // Output: Info: All systems go