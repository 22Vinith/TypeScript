// Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class to inherit properties and methods from another class. This promotes code reuse and establishes a relationship between different classes.

// In TypeScript, inheritance is implemented using the extends keyword. The class that is inherited from is called the base class (or parent class), while the class that inherits is called the derived class (or child class).

// Key Concepts of Inheritance
// Base Class: The class whose properties and methods are inherited.
// Derived Class: The class that inherits from the base class.
// Override: A derived class can provide a specific implementation for a method defined in the base class.
// Example of Inheritance
// Here’s a simple example demonstrating inheritance in TypeScript:


// // Base class
// class Animals {
//     constructor(public name: string) {}

//     // Method in the base class
//     speak(): void {
//         console.log(`${this.name} makes a noise.`);
//     }
// }

// // Derived class
// class Dog extends Animal {
//     // Overriding the speak method
//     speak(): void {
//         console.log(`${this.name} barks.`);
//     }
// }

// // Another derived class
// class Cat extends Animal {
//     // Overriding the speak method
//     speak(): void {
//         console.log(`${this.name} meows.`);
//     }
// }

// // Creating instances of the derived classes
// const dog = new Dog("Rex");
// dog.speak(); // Output: Rex barks.

// const cat = new Cat("Whiskers");
// cat.speak(); // Output: Whiskers meows.