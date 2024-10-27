// In TypeScript, aliasing allows you to create a new name for a type. This is particularly useful for simplifying complex type definitions, improving code readability, and reusing type definitions throughout your codebase. You can create type aliases for primitive types, object types, union types, tuple types, and more.

// 1. Type Aliases for Primitive Types
// You can create a type alias for a primitive type, making your code more descriptive.


type ID = number;
type Username = string;

let userIdn: ID = 123;
let username: Username = "Alice";
// 2. Type Aliases for Object Types
// You can create type aliases for object structures, which can help avoid repetition and clarify the structure of the objects.


type Usere = {
    name: string;
    age: number;
    email?: string; // optional property
};


// 3. Union Types
// Type aliases can also be used with union types, allowing a variable to hold one of several types.


type StringOrNumber = string | number;

let valuea: StringOrNumber;

valuea = "Hello";  // Valid
value = 42;      // Valid
// value = true; // Error: Type 'boolean' is not assignable to type 'StringOrNumber'
// 4. Tuple Types
// You can create aliases for tuple types to clarify their structure and purpose.

// typescript
// Copy code
type StringNumberPair = [string, number];

let pair: StringNumberPair = ["Alice", 30];
// 5. Function Types
// Type aliases can also define the type of functions, making it easier to understand and reuse function signatures.

// typescript
// Copy code
type GreetFunction = (name: string) => string;

const greetx: GreetFunction = (name) => `Hello, ${name}!`;

console.log(greet("Alice")); // Output: Hello, Alice!