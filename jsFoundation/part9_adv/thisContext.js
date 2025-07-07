const person = {
    name: "Abir",
    greet: function () {
        console.log(`Hello, ${this.name}`);
    }
}
person.greet(); //Hello, Abir

const greetFunction = person.greet;     //this context is lost
greetFunction(); //Hello, undefined


// Solution 1: Use bind() method****

const boundGreet = person.greet.bind(person);  
boundGreet();   //Hello, Abir
// bind() Method: The bind() method creates a new function with the specified this value.
// this Context: person.greet.bind(person) creates a new function where this is permanently bound to the person object.


// Solution 2: Use call() method

person.greet.call(person); //Hello, Abir
// call() Method: The call() method calls a function with a given this value and arguments provided individually.


// Solution 3: Use apply() method

person.greet.apply(person); //Hello, Abir
// apply() Method: The apply() method calls a function with a given this value and arguments provided as an array.