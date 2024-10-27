// In TypeScript, arrays can be defined and used with specific types to ensure type safety. Here are some ways to work with arrays in TypeScript:

// 1. Basic Array Declaration
// You can declare arrays in TypeScript by specifying the type of elements followed by square brackets [].


let numbersof: number[] = [1, 2, 3, 4];
let namesof: string[] = ["Alice", "Bob", "Charlie"];
// 2. Using the Array Generic Type
// Another way to declare an array is to use the Array<type> syntax:


let num: Array<number> = [1, 2, 3, 4];
let nam: Array<string> = ["Alice", "Bob", "Charlie"];
// 3. Multi-dimensional Arrays
// TypeScript allows multi-dimensional arrays by using multiple [] or Array<type[]>.


let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// 4. Array of Objects
// You can define arrays of objects by creating an object type and using it as the array type.


type Person2 = {
    name: string;
    age: number;
};

let people: Person2[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
];
// 5. Array Methods with Type Inference
// TypeScript provides type inference for array methods, so when you use methods like map, filter, and reduce, it preserves the element type.


let numb: number[] = [1, 2, 3, 4];

// TypeScript knows `squaredNumbers` is an array of numbers
let squaredNumbers = numbers.map((num) => num * num);

// Filtering for even numbers
let evenNumbers = numbers.filter((num) => num % 2 === 0);
// 6. Readonly Arrays
// To create an immutable array, you can use readonly before the array type.


let number: readonly number[] = [1, 2, 3];
// numbers.push(4); // Error: cannot modify readonly array
// 7. Tuple Arrays
// A tuple is a fixed-size array where each element can have a different type. This is useful when you want to represent an array with a known structure.


let person1: [string, number] = ["Alice", 25];
// Access elements by their index
console.log(person1[0]); // "Alice"
console.log(person1[1]); // 25
// 8. Union Types in Arrays
// You can create arrays that hold more than one type using union types.


let mixedArray: (string | number)[] = [1, "two", 3, "four"];
// Example Code
// Here's an example demonstrating various ways to work with arrays in TypeScript:


// Simple array of numbers
let scores: number[] = [90, 85, 75];

// Array of strings
let names3: Array<string> = ["Alice", "Bob", "Charlie"];

// Array of objects
type Product = { name: string; price: number };
let products: Product[] = [
    { name: "Phone", price: 700 },
    { name: "Tablet", price: 300 },
];

// Tuple array
let coordinate: [number, number] = [10, 20];

// Using map with type inference
let doubleScores = scores.map(score => score * 2); // [180, 170, 150]