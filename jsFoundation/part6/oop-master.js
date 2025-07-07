//Inheritance(continued)

//Classes (Modern Approach):

class Animal {
  constructor(eats) {
    this.eats = eats;
  }
  walk() {
    console.log("Animal is walking");
  }
}
class Dog extends Animal {
  constructor(breed, eats) {
    super(eats); //Calls the parent constructor //Imp*** //Must call before 'this'***
    this.breed = breed;
  }
  bark() {
    console.log("Woof!");
  }
}

const myDog = new Dog("Golden retriver", true);

myDog.walk();
myDog.bark();
console.log(myDog);
console.log(myDog.eats);
console.log(myDog.breed);



class Vehicle {
    constructor(company,model) {
        this.company = company;
        this.model = model;
    }
    start() {
        return `${this.model} is a car from ${this.company}`;
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.company}: This is an inheritance example`;
    }
}
let myCar = new Car("Toyota", "Corolla");

console.log(myCar);
console.log(myCar.start());
console.log(myCar.drive());     



//Encapsulation

class BankAccount {
  #balance = 0;  // Private field to store the account balance, initialized to 0.
  deposit(amount) {
    this.#balance += amount; 
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
  
}
let account = new BankAccount;
console.log(account.getBalance()); //Output will be "$ 0" if amount=0

// Try to access the private field directly (this will cause an error):
// console.log(account.#balance);  //SyntaxError because #balance is private.

// You can't even access it like this:
// console.log(account.balance); //return undefined, because 'balance' is not a public property.
// The actual balance is held in the private #balance.

// You can only interact with the balance through the defined methods: deposit() and getBalance().


// Abstraction

class CoffeeMachine{
  start() {
    //call DB
    //filter value
    return `Starting the machine`;
  }
  brewCoffee() {
    //complex calculation
    return `Brewing Coffee`;
  }
  pressStartButton() {
    let startMessage = this.start();  //must store in a variable***
    let brewMessage = this.brewCoffee();
    return `${startMessage} & ${brewMessage}`;
  }
}
let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());
// This line demonstrates the abstraction. The user only interacts with the pressStartButton() method.
// The complex internal processes of starting and brewing are hidden from the user.



//Polymorphism

class Bird {
  fly() {
    return `Flying...`;
  }
}
class Penguin extends Bird {
  // Penguin class inherits from Bird and overrides the fly method.
  // This is polymorphism: the same method name (fly) has different behavior
  // depending on the object it's called on.
  fly() {
    return `Penguins can't fly`;
  }
}
let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());





class Calculator {
   // Static methods belong to the class itself, not to instances of the class.
  static sum(a, b) {
    return a + b;
    }
}
let miniCalc = new Calculator();
// console.log(miniCalc.sum(2,3)); //Error
console.log(Calculator.sum(2,3));  // Output: 5

// Explanation:
// Static methods are associated with the class, not with individual objects created from the class.
// Think of them as utility functions related to the class's purpose, but not dependent on any specific
// object's state.  You call them using the class name (Calculator.sum) rather than an instance
// variable (miniCalc.sum).


//Getters and Setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Invalid Salary");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return "You are not allowed to see the salary"; // Or return a modified version
  }

  set salary(value) {
    if (value < 0) {
      console.error("Salary is invalid");
    } else {
      this.#salary = value; // Correctly update the private #salary
    }
  }

  get actualSalary() { // A getter to access the actual salary (for demonstration)
    return this.#salary;
  }
}

let emp = new Employee("Abir", 50000); // Correct salary

console.log(emp.salary); // Output: You are not allowed to see the salary
emp.salary = 60000;
console.log(emp.salary); // Output: You are not allowed to see the salary
console.log(emp.actualSalary); // Output: 60000 (Demonstrates the updated private value)

emp.salary = -10000; // Output: Salary is invalid
console.log(emp.actualSalary); // Output: 60000 (Salary remains unchanged)