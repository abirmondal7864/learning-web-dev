// Prototypes in JavaScript
// Task: Prototype Chaining

// Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
// Then create another constructor Dog that inherits from Animal using prototypes.
// The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.
 
function Animal() {
}
Animal.prototype.speak= function () {
    return `Animal speaking`;
}
Animal.prototype.constructor = Animal;
function Dog() {
}

// 1.  Crucial Step: Establish inheritance *FIRST*
Dog.prototype = Object.create(Animal.prototype) //Crucial for inherihatance 

// 2. Then, reset Dog's constructor (best practice)
Dog.prototype.constructor = Dog;

// 3. *AFTER* inheritance and constructor reset, add Dog-specific methods
Dog.prototype.bark=function () {
    return `Woof!`;
}

let myDog = new Dog();
console.log(myDog.speak());
console.log(myDog.bark());

