// In TypeScript, a tuple is a special type of array that allows you to specify the exact types of elements at specific positions within the array. This provides a way to store a fixed number of elements with potentially different types. Tuples add a layer of structure and safety beyond regular arrays.

// Declaring Tuples
// You declare a tuple by specifying the types of each element in an array format, separated by commas.


let persons: [string, number] = ["Alice", 30];
// Here:

// The first element is a string (e.g., "Alice").
// The second element is a number (e.g., 30).
// Accessing Tuple Elements
// Tuple elements can be accessed just like elements in an array using their index.

// typescript
// Copy code
console.log(person[0]); // "Alice"
console.log(person[1]); // 30
// Common Tuple Use Cases
// Returning Multiple Values from a Function

// Tuples are useful for returning multiple values from a function, especially when the values are of different types.


function getUserInfo(): [string, number] {
    return ["Alice", 30];
}

let [namess, ages] = getUserInfo();
// Defining Key-Value Pairs

// Tuples are also helpful when you want to define a key-value pair, especially when working with mappings or lookup tables.


let entry: [string, number] = ["Alice", 1];
// Optional Elements in Tuples
// TypeScript allows you to mark elements in a tuple as optional by adding a ?.


let info: [string, number?] = ["Alice"]; // second element is optional