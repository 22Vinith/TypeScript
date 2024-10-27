// In TypeScript, union types and intersection types are advanced type features that allow you to combine multiple types in a flexible way. Here’s a detailed explanation of each:

// Union Types
// Union types allow you to define a variable that can hold multiple types. You create a union type using the | (pipe) symbol.

// Defining Union Types

type StringOrNumbers = string | number;

let val: StringOrNumber;

val = "Hello"; // Valid
value = 42;      // Valid
// value = true; // Error: Type 'boolean' is not assignable to type 'StringOrNumber'
// Function with Union Types
// You can use union types in function parameters to accept different types.


function printId(id: string | number): void {
    console.log(`Your ID is: ${id}`);
}

printId("123"); // Output: Your ID is: 123
printId(456);   // Output: Your ID is: 456
// Type Narrowing with Union Types
// TypeScript provides type narrowing techniques to determine the type of a variable at runtime.


function log(value: string | number): void {
    if (typeof value === "string") {
        console.log(`String: ${value}`);
    } else {
        console.log(`Number: ${value}`);
    }
}

log("Hello"); // Output: String: Hello
log(42);      // Output: Number: 42
// Intersection Types
// Intersection types allow you to combine multiple types into one. You create an intersection type using the & (ampersand) symbol. This means the new type will require all properties from the combined types.

// Defining Intersection Types

type Personn = {
    name: string;
    age: number;
};

type Employeee = {
    employeeId: number;
};

type EmployeeDetails = Person & Employee;

// let emp: EmployeeDetails = {
//     name: "Alice",
//     employeeId: 101
// };

// // console.log(employeeeww);
// //  Using Intersection Types in Functions
// // You can define function parameters that require multiple types using intersection types.


function printEmployeeDetails(employee: Person & Employee): void {
    console.log(`Name: ${employee.name},  ID: ${employee.employeeId}`);
}

// printEmployeeDetails(employeees); // Output: Name: Alice, Age: 30, ID: 101