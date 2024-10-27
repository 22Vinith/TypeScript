// Generators in TypeScript are a special type of function that can be paused and resumed, allowing you to produce a sequence of values over time. They are a powerful feature that enables you to work with asynchronous programming and manage iterations more effectively.

// Key Concepts of Generators
// Generator Function: Defined using the function* syntax. It returns a generator object that can be iterated over.
// Yield Statement: The yield keyword is used to pause the generator function and return a value to the caller. When the generator is resumed, execution continues from the last yield.
// Iterator Protocol: Generators implement the iterator protocol, meaning they can be used in for...of loops, spread syntax, and other iterable contexts.
// Simple Example of Generators
// Here's a basic example demonstrating how to use generators in TypeScript:


// Generator function that yields numbers from 1 to n
function* numberGenerator(n: number): Generator<number> {
    for (let i = 1; i <= n; i++) {
        yield i; // Pause and return the current number
    }
}

// Using the generator
const gen = numberGenerator(5);

console.log(gen.next()); // Output: { value: 1, done: false }
console.log(gen.next()); // Output: { value: 2, done: false }
console.log(gen.next()); // Output: { value: 3, done: false }
console.log(gen.next()); // Output: { value: 4, done: false }
console.log(gen.next()); // Output: { value: 5, done: false }
console.log(gen.next()); // Output: { value: undefined, done: true }