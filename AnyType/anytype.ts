// The any type in TypeScript is a flexible type that essentially disables type checking for a particular variable. It allows you to assign any type of value to a variable and bypasses the usual type-checking that TypeScript enforces. This can be helpful when you’re unsure of a variable’s type, or when working with data that could come in multiple formats, but it should be used sparingly.

// Using the any Type
// When a variable is explicitly declared as any, TypeScript allows it to be assigned and re-assigned to any type of value without restriction:

let value5: any = 42;       // `value` starts as a number
value5 = "Hello";           // Now it's a string, no error
value5 = true;              // Now it's a boolean, still no error
// Implicit any
// If you declare a variable without initializing it or specifying a type, TypeScript may infer the type as any if noImplicitAny is not enabled in your configuration.


let something;             // inferred as `any`
something = "hello";       // valid
something = 42;            // still valid