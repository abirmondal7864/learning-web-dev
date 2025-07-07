// Encapsulation, Polymorphism, Abstraction, and Getters/Setters
// Task 1: Encapsulation Using Getters and Setters

// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount).
//  Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

class BankAccount {
  constructor(balance = 0) {
    if (typeof balance !== "number" || balance < 0) {
      throw new Error("Balance must be a non-negative number");
    }
    this._balance = balance; // _balance is encapsulated as private
  }

  // Deposit method adds money to the balance
  deposit(amount) {
    if (typeof amount !== "number" || amount < 0) {
      throw new Error("Deposit amount must be a non-negative number");
    }
    this._balance += amount;
    return this._balance;
  }

  // Withdraw method deducts money from the balance
  withdraw(amount) {
    if (typeof amount !== "number" || amount < 0) {
      throw new Error("Withdrawal amount must be a non-negative number");
    }
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
    return this._balance;
  }

  // Getter for balance
  getBalance() {
    return this._balance;
  }

  // Setter for balance, with validation
  setBalance(amount) {
    if (typeof amount !== "number" || amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    let oldAmount = this.getBalance();
    this._balance = oldAmount + amount;
  }
}
// Usage example:

let myAcc = new BankAccount(0);

console.log(myAcc.getBalance()); // 1000

myAcc.deposit(1000); // Depositing 1000
myAcc.withdraw(500); // Withdrawing 500
console.log(myAcc.getBalance()); // 1500

// Setting balance directly through setter
myAcc.setBalance(2000);
console.log(myAcc.getBalance()); // 2000

// Task 2: Polymorphism with Method Overriding

// Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that
// override the area() method to calculate the area of a circle and a rectangle, respectively.

class Shape {
  area() {
    return 0;
  }
}

class Circle {
  constructor(radius) {
    if (typeof radius !== "number" || radius < 0) {
      return console.error("Radius must be a non negative number");
    }
    this.radius = radius;
  }
  area() {
    return Math.PI * Math.pow(this.radius, 2); //Math.PI and Math.Pow(Base,Power)***
    // return Math.PI * this.radius**2; //Another way
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}
let anyShape = new Shape();
console.log(anyShape.area()); //0

let myCircle = new Circle(5);
console.log(myCircle.area());

let myRect = new Rectangle(5, 10);
console.log(myRect.area());
