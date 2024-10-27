// In TypeScript, objects work similarly to JavaScript objects but with additional type annotations. You can define the structure of an object by specifying the types for its properties, ensuring that only objects with the correct structure are allowed.

// Basic Object Types
// You can define the type of an object by explicitly listing the properties and their types.


let perso: { name: string; age: number } = {
    name: "Alice",
    age: 30
};

// console.log(person.name); // Output: Alice
// console.log(person.age);  // Output: 30
// In this example:

// name is of type string.
// age is of type number.
// Optional Properties
// You can make properties optional by adding a ? after the property name.

let car: { brand: string; model?: string } = {
    brand: "Toyota"
};

console.log(car.brand); // Output: Toyota
console.log(car.model); // Output: undefined (optional property not set)