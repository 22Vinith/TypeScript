// Abstraction in TypeScript (and in programming in general) is a fundamental concept of object-oriented programming that focuses on hiding the implementation details of an object and exposing only the necessary features. This allows developers to work with complex systems by breaking them down into simpler, more manageable components.

// Key Concepts of Abstraction in TypeScript
// Abstract Classes: These are classes that cannot be instantiated on their own and can contain abstract methods that must be implemented by subclasses.

// Interfaces: These define a contract for classes. They specify what methods and properties a class should have, but do not provide implementation.

// 1. Using Abstract Classes
// An abstract class is defined using the abstract keyword. It can have both implemented methods and abstract methods (methods without implementation).

// Example

abstract class Animal {
    abstract makeSound(): void; // Abstract method

    move(): void {
        console.log("Animal is moving");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!");
    }
}

const dog = new Dog();
dog.makeSound(); // Output: Woof!
dog.move();      // Output: Animal is moving

const cat = new Cat();
cat.makeSound(); // Output: Meow!
cat.move();      // Output: Animal is moving


// 2. Using Interfaces
// An interface defines the structure of an object, including the methods and properties it should have. Classes can implement interfaces to adhere to that structure.

// Example

interface Shape {
    area(): number; // Method declaration
}

class Circle implements Shape {
    constructor(private radius: number) {}

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Square implements Shape {
    constructor(private side: number) {}

    area(): number {
        return this.side * this.side;
    }
}

const circle = new Circle(5);
console.log(`Circle Area: ${circle.area()}`); // Output: Circle Area: 78.53981633974483

const square = new Square(4);
console.log(`Square Area: ${square.area()}`); // Output: Square Area: 16