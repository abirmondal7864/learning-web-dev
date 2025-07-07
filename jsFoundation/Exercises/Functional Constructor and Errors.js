// Task 1: Create a Functional Constructor

// Create a functional constructor Person that takes name and age as parameters. Add a method greet() 
// to the constructor that returns "Hello, my name is [name]".

function Person(name,age) {
    this.name = name;
    this.greet= function (){
        return `Hello, my name is ${this.name}`;
    }
    // Task 2: Handle Errors
    
    // Modify the Person constructor to throw an error if the age is not a positive number.
    this.age = age;
    if (this.age<=0) {
        throw new Error("Age must be a positive number"); //Imp*** //dont do silly mistakes
    } 
}
let pers1 = new Person("Abir",4);
console.log(pers1.greet());
console.log(pers1.age);

