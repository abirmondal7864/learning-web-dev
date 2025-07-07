// THIS and Binding Context
// Task 1: Bind the Correct Context

// Create an object person with properties name and a method introduce(). Use the bind() method to ensure the
// method works correctly when passed to another function.

// Example 1: Setting the 'this' context

const person = {
  name: "Alice",
  introduce() { //Imp***
    return `Hi, my name is ${this.name}`;
  }
};
const boundIntroduce = person.introduce.bind(person); // Binding 'this' to the 'person' object
console.log(boundIntroduce()); // Output: Hello, my name is Alice

// Task 2: Using call() to Invoke a Function with Different Contexts

// Write a function introduce() that uses the this keyword to introduce a person by name. Then, invoke 
// introduce() using call() to introduce different people with the same function.

function introduce(name) {
    return `Hello, ${this.name}`;
}
const pers1 = { name: "Abir" };
const pers2 = { name: "Akash" };

console.log(introduce.call(pers1)); //Therefore, inside the introduce function, this.name refers to person1.name, which is "Abir".
console.log(introduce.call(pers2)); //Imp****




// Task 3: Using apply() to Pass Arguments with Context*****Most IMP

// Create a function sum() that accepts two numbers and uses this to access a multiplier value. Then, invoke
// sum() with different contexts using apply(), passing the numbers as an array.

function sum(a, b) {
    return (a + b) * this.multiplier;
}
const context1 = { multiplier: 5 }; //IMP***
const context2 = { multiplier: 10 };

const result1 = sum.apply(context1, [3, 4]); //Imp***
const result2 = sum.apply(context2, [3, 4]); 

console.log(result1);
console.log(result2);



