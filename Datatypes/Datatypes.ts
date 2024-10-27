// TypeScript provides a wide variety of data types that extend JavaScript’s capabilities, offering static typing for more robust code. Here’s a detailed look at the different data types in TypeScript:

// 1. Primitive Types
// number: Represents both integer and floating-point numbers.


const age2: number = 25;
let temperature: number = 98.6;
// // string: Represents textual data.


let firstName11: string = "Alice";
let greeting0: string = `Hello, ${firstName}`;
// // boolean: Represents true or false.


let isActive3: boolean = true;
// // null and undefined: Used to represent null or undefined values, often as a union type.


let notAssigned5: undefined = undefined;
let empty: null = null;
// bigint: Represents large integer numbers.


let bigNumber: bigint = 9007199254740991n;
// symbol: Represents unique symbols, useful for creating unique object properties.


let uniqueId: symbol = Symbol("id");
// 2. Special Types
// any: Allows any type and bypasses TypeScript’s type checking.


let variable: any = "hello";
variable = 42; // No error
// unknown: Similar to any, but safer, as it requires type-checking before using.


let input: unknown = "hello";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
// void: Used as a return type for functions that don’t return anything.


function logMessage(message: string): void {
    console.log(message);
}
// never: Represents values that will never occur, often used as a return type for functions that throw errors or run indefinitely.


function throwError(message: string): never {
    throw new Error(message);
}
// 3. Array Types
// Arrays can be defined using type[] or Array<type>.

let numbers9: number[] = [1, 2, 3];
let strings: Array<string> = ["hello", "world"];
// 4. Tuple Types
// Tuples are fixed-length arrays with defined types for each element.

let person: [string, number] = ["Alice", 25];
// 5. Union and Intersection Types
// Union Types: Allows a variable to hold values of multiple types.


let id: string | number;
id = "ABC123"; // Valid
id = 123; // Valid
// Intersection Types: Combines multiple types into one.


interface Person {
    name: string;
}
interface Employee {
    employeeId: number;
}
type EmployeePerson = Person & Employee;
// 6. Object Types
// Objects can be defined with type or interface.

interface User {
    name: string;
    age: number;
    isAdmin: boolean;
}

// let user : User = { name: "Alice", age: 30, isAdmin: true };
// 7. Enum Types
// Enums define a set of named constants. They can be numeric or string enums.

enum Direction {
    Up,
    Down,
    Left,
    Right,
}
let move = Direction.Up;
// 8. Literal Types
// Literal types allow you to specify exact values a variable can hold.

let color: "red" | "green" | "blue";
color = "red"; // Valid
// 9. Function Types
// Functions can have typed parameters and return types.

function add(x: number, y: number): number {
    return x + y;
}

let myFunction: (a: number, b: number) => number;
myFunction = add;
// 10. Type Aliases
// Type aliases create custom types that can be reused.

// type ID = string | number;
// let userId: ID = 123;
// Example Usage of Various Types

type Status = "active" | "inactive";
interface User {
    id: number;
    name: string;
    isAdmin: boolean;
    status: Status;
}

const addUser = (user: User): string => {
    return `User ${user.name} added with status ${user.status}`;
}

// let user: User = {
//     id: 1,
//     name: "Alice",
//     isAdmin: true,
//     status: "active",
// };

// console.log(addUser(user));
// TypeScript’s type system helps catch potential errors during development, improves readability, and enhances code maintainability. It provides strong type support across various data structures and types.