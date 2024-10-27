// In TypeScript, literal types allow you to specify exact values a variable can hold. This feature enhances type safety by restricting the values to a specific set, such as strings, numbers, booleans, or even objects and arrays. Here’s a detailed overview of the different kinds of literals in TypeScript:

// 1. String Literal Types
// String literal types allow you to specify that a variable can only hold a specific string value.

// Example

type Greeting = "hello" | "hi" | "goodbye";

let message: Greeting;

message = "hello";  // Valid
message = "hi";     // Valid
// message = "welcome"; // Error: Type '"welcome"' is not assignable to type 'Greeting'.
// 2. Numeric Literal Types
// Numeric literal types restrict a variable to specific numeric values.

// Example

type Directions = 1 | 2 | 3 | 4; // Represents directions like north, south, east, west

let moves: Direction;

move = 1; // Valid
move = 2; // Valid
// move = 5; // Error: Type '5' is not assignable to type 'Direction'.
// 3. Boolean Literal Types
// You can also use literal types with booleans, restricting a variable to either true or false.

// Example

type Statusr = true | false;

let isActived: Status;

isActive = true;  // Valid
isActive = false; // Valid
// isActive = null; // Error: Type 'null' is not assignable to type 'Status'.
// 4. Object Literal Types
// You can create a type that specifies the exact shape of an object using literal types.

// Example

type Point = {
    x: 0 | 1 | 2 | 3; // x can only be 0, 1, 2, or 3
    y: 0 | 1 | 2 | 3; // y can only be 0, 1, 2, or 3
};

let point: Point = {
    x: 1,
    y: 2
};

// point = { x: 4, y: 2 }; // Error: Type '4' is not assignable to type '0 | 1 | 2 | 3'.
// 5. Array Literal Types
// You can also define an array type that only allows certain values.

// Example

type Colors = "red" | "green" | "blue";

let favoriteColors: Colors[] = ["red", "green"]; // Valid
// favoriteColors = ["red", "yellow"]; // Error: Type '"yellow"' is not assignable to type 'Colors'.
// 6. Union of Literal Types
// You can create a type that allows a variable to hold multiple specific literal values.

// Example

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

function makeRequest(method: HTTPMethod) {
    // Function implementation...
}

makeRequest("GET"); // Valid
makeRequest("POST"); // Valid
// makeRequest("PATCH"); // Error: Argument of type '"PATCH"' is not assignable to parameter of type 'HTTPMethod'.
// 7. Using Literal Types with Functions
// You can use literal types to specify function parameters or return types that must match specific values.

// Example

function respond(status: "success" | "error"): string {
    if (status === "success") {
        return "Operation was successful!";
    } else {
        return "An error occurred.";
    }
}

console.log(respond("success")); // Output: Operation was successful!
// console.log(respond("pending")); // Error: Argument of type '"pending"' is not assignable to param