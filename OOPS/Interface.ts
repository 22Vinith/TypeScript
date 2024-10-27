// In TypeScript, an interface is a way to define the structure of an object. It specifies what properties and methods an object should have, without providing the actual implementation. Interfaces are useful for enforcing type checking and ensuring that classes or objects conform to a specific shape.

// Key Concepts of Interfaces
// Defining Structure: An interface defines the properties and methods that an object must have.
// Implementing Interfaces: Classes can implement interfaces, ensuring they adhere to the defined structure.
// Optional Properties: You can define properties as optional using the ? symbol.
// Example of Using Interfaces with Different Variables
// Here’s a simple example demonstrating how to use interfaces in TypeScript with different variable names:


// Define an interface for a Vehicle
interface Vehicle {
    make: string;        // Required property
    model: string;       // Required property
    year: number;        // Required property
    start(): void;       // Required method
}

// Implementing the interface in a class
class Cars implements Vehicle {
    constructor(
        public make: string,
        public model: string,
        public year: number
    ) {}

    // Implementing the start method
    start(): void {
        console.log(`Starting the car: ${this.make} ${this.model}, Year: ${this.year}`);
    }
}

// Another class implementing the interface
class Truck implements Vehicle {
    constructor(
        public make: string,
        public model: string,
        public year: number
    ) {}

    // Implementing the start method
    start(): void {
        console.log(`Starting the truck: ${this.make} ${this.model}, Year: ${this.year}`);
    }
}

// Creating instances of Car and Truck
// const Cars: Vehicle = new Cars("Toyota", "Camry", 2022);
// const myTruck: Vehicle = new Truck("Ford", "F-150", 2021);

// // Using the instances
// myCar.start();  // Output: Starting the car: Toyota Camry, Year: 2022
// myTruck.start(); // Output: Starting the truck: Ford F-150, Year: 2021