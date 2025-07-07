/*
A constructor function is essentially a regular JavaScript function, but it's used
 with the new keyword to create objects.    

 Constructor functions are used with the 'new' keyword to create objects.

'this' inside the constructor function refers to the newly created object.
 */

//How to Define a Constructor Function:

function Tea(type) {
  //The constructor function name usually starts with a capital letter (a common convention).
  this.type = type; //Inside the function, this refers to the new object being created.
  this.describe = function() {
    console.log(`This is ${this.type} tea`);
  };
}
let myTea = new Tea("green");
myTea.describe();



//Prototypes and Constructor Functions: //Imp***


function Vehicle(model) {
    this.model =model;
}
Vehicle.prototype.race= function () {
    return `${this.model} can race`;
}
let Car = new Vehicle("Mercedes");
let Bike = new Vehicle("Kawasaki");
console.log(Car.race());
console.log(Bike.race());




function Animal(eats) {
    this.eats = eats;
}    
Animal.prototype.walk = function () {
    console.log("Animal is walking");
    
}    
function Dog(breed,eats) {
    Animal.call(this, eats);  //call animal constructor to set 'eats'
    this.breed = breed;
}    

Dog.prototype = Object.create(Animal.prototype); // Crucial for inheritance!

Dog.prototype.bark=function() {
    console.log("Woof!");
}    
const myDog = new Dog("Golden retriver", true);

myDog.walk();// Output: Animal is walking
myDog.bark();// Output: Woof!
console.log(myDog.eats);// Output: true
console.log(myDog.breed);// Output: Golden Retriever

console.log(Object.getPrototypeOf(myDog)==Dog.prototype); //true
console.log(Object.getPrototypeOf(Dog.prototype) == Animal.prototype); //true
console.log(Object.getPrototypeOf(myDog) == Animal.prototype); //false





//OPTIONAL part
// This code demonstrates a pattern for enforcing that a constructor function in JavaScript must be called with the new keyword
function Drink(name) {
    if (!new.target) {
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}
let Mocha = new Drink("Mocha"); //NO ERROR
// let Coffee = Drink("Coffee"); //THROWS ERROR

