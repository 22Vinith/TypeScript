// In TypeScript, enum (short for "enumeration") is a data structure that allows you to define a set of named constants, making code more readable and expressive. Enums can be numeric, string-based, or heterogeneous (mixed numeric and string values).

// 1. Numeric Enums
// Numeric enums are the default in TypeScript. They start at 0 by default and increment by 1 for each subsequent member, though you can manually set the starting value or specific values for each member.

enum Direction {
    Up1 = 10,
    Down1 = 20,
    Left1 = 30,
    Right1= 40
}
// 2. String Enums
// String enums are explicitly assigned string values, which can make debugging easier since the values retain more meaning than numbers.


enum Statuss {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Paused = "PAUSED",
    Completed = "COMPLETED"
}



// 3. Heterogeneous Enums
// Heterogeneous enums combine both numeric and string values, though they’re typically used sparingly since it can make the enum harder to understand.


enum Mix {
    No = 0,
    Yes = "YES"
}

// Usage
let answer: Mix = Mix.Yes;
console.log(answer); // Output: YES
// 4. Enum with Computed Values
// Enums can also use computed values, such as calling a function or expression to set an enum value. However, only numeric values can use computed values, and they must be positioned after any manually set values.


function getValue() {
    return 3;
}

enum ComputedEnum {
    A = 1,
    B = getValue(), // Allowed because it’s after a manually set numeric value
    C=3               // C will be 4
}
// 5. Enum with Multiple Variable Types
// While enums themselves cannot hold multiple types per member, they can be used alongside const or type for more complex structures.


enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

type Userf = {
    name: string;
    role: Role;
}

