// Generics in TypeScript allow you to create reusable components that can work with a variety of data types without sacrificing type safety. By using generics, you can define a function, class, or interface that can operate on different types while still retaining the ability to enforce specific types during usage.

// Key Concepts of Generics
// Type Parameters: Generics use type parameters (often denoted by <T>, <U>, etc.) to specify the types that will be used when the generic is instantiated.
// Flexibility and Reusability: Generics enable the creation of flexible functions and classes that can work with multiple types without duplicating code.
// Example of Generics with Different Variables
// Here’s a simple example demonstrating how to use generics in TypeScript with different variable names:

// Generic Function Example
// A generic function that returns the first element of an array
function getFirstElement<T>(arr: T[]): T {
    return arr[0]; // Returns the first element of the array
}

// Using the generic function with different types
const numberArray = [1, 2, 3, 4];
const firstNumber = getFirstElement(numberArray); // Type is inferred as number
console.log(`First number: ${firstNumber}`); // Output: First number: 1

const stringArray = ["apple", "banana", "cherry"];
const firstString = getFirstElement(stringArray); // Type is inferred as string
console.log(`First string: ${firstString}`); // Output: First string: apple

// Explanation of the Example
// Generic Function Definition (getFirstElement):

// The function getFirstElement is defined with a type parameter <T>, which represents the type of elements in the array.
// It takes an array of type T and returns an element of type T, specifically the first element of the array.
// Using the Generic Function:

// When calling getFirstElement with numberArray, TypeScript infers that T is number, so the function will return a number.
// Similarly, when called with stringArray, TypeScript infers that T is string, returning a string.
// Generic Class Example
// Here’s a simple example of a generic class:


// A generic class that holds a value of any type
class Container<T> {
    constructor(private value: T) {}

    getValue(): T {
        return this.value; // Returns the stored value
    }
}

// Creating instances of the generic class with different types
const numberContainer = new Container<number>(42);
console.log(`Number Container: ${numberContainer.getValue()}`); // Output: Number Container: 42

const stringContainer = new Container<string>("Hello, Generics!");
console.log(`String Container: ${stringContainer.getValue()}`); // Output: String Container