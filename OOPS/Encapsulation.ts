// Encapsulation is one of the fundamental concepts of object-oriented programming (OOP) that restricts direct access to certain components of an object. It helps to protect the internal state of an object and only exposes the necessary methods and properties to the outside world.

// In TypeScript, encapsulation is achieved using access modifiers: public, private, and protected. Here's a simple breakdown:

// Key Concepts of Encapsulation
// Public: Properties and methods are accessible from anywhere.
// Private: Properties and methods are accessible only within the class they are defined in.
// Protected: Properties and methods are accessible within the class and its subclasses.
// Example of Encapsulation
// Here's a simple example demonstrating encapsulation in TypeScript:


class BankAccount {
    // Private property
    private balance: number;

    // Constructor
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    // Public method to deposit money
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Public method to withdraw money
    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }

    // Public method to check balance
    public getBalance(): number {
        return this.balance;
    }
}

// Creating an instance of BankAccount
const myAccount = new BankAccount(1000);

// Using public methods
myAccount.deposit(500);      // Output: Deposited: $500. New Balance: $1500
myAccount.withdraw(200);     // Output: Withdrew: $200. New Balance: $1300
console.log(myAccount.getBalance()); // Output: 1300


