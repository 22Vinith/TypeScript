// Polymorphism is a core concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. It enables methods to do different things based on the object it is acting upon, even though they share the same name.

// Key Concepts of Polymorphism
// Method Overriding: A derived class can provide a specific implementation of a method that is already defined in its base class.
// Method Overloading: (not supported directly in TypeScript) A method can have the same name but different parameters in the same class.
// Types of Polymorphism
// Compile-time Polymorphism: Achieved through method overloading and operator overloading.
// Run-time Polymorphism: Achieved through method overriding (the most common type).


// Base class
class Shape {
    // Abstract method for calculating area
    area(): number {
        throw new Error("Method 'area()' must be implemented.");
    }
}

// Derived class for Circle
class Circles extends Shape {
    constructor(private radius: number) {
        super();
    }

    // Overriding the area method
    area(): number {
        return Math.PI * this.radius * this.radius; // Area = πr²
    }
}

// Derived class for Square
class Squares extends Shape {
    constructor(private side: number) {
        super();
    }

    // Overriding the area method
    area(): number {
        return this.side * this.side; // Area = side²
    }
}

// Function that takes a Shape object and returns its area
function calculateArea(shape: Shape): number {
    return shape.area();
}

// Creating instances of Circle and Square
const myCircle = new Circle(5);
const mySquare = new Square(4);

// Using polymorphism
console.log(`Area of Circle: ${calculateArea(myCircle)}`); // Output: Area of Circle: 78.53981633974483
console.log(`Area of Square: ${calculateArea(mySquare)}`); // Output: Area of Square: 16
