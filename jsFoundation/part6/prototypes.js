/* In JavaScript, a prototype is like blueprint.  It's an object that serves as a template for 
other objects.Every object in JavaScript has a prototype.  This prototype is itself an object, and 
it can have its own prototype, forming a chain called the prototype chain.
Why Prototypes?
 Prototypes enable inheritance in JavaScript.  Objects can inherit properties and methods from their prototype.
*/

// Examples


// Object Literals: (less preferred way)

// let animal = {
//     eats: true,
// }
// let dog = {
//     breeds:"Labrador",
//     __proto__: animal, //sets animal as a protoype for the dog object
// }
// console.log(dog.eats);// Output: true (dog inherits 'eats' from animal)
// console.log(dog.breeds);// Output: true (dog inherits 'eats' from animal)


//Object.create() (Modern and preferred):

// let animal = {
//     eats: true,
// }
// let dog = Object.create(animal); // Creates dog with animal as its prototype
// dog.breeds = "Labrador";
// console.log(dog.eats);
// console.log(dog.breeds);


// Object.getPrototypeOf(object):
//  This method returns the prototype of the specified object

// Object.setPrototypeOf(object, prototype):
//  This method sets the prototype of the specified object to a new prototype.

let animal = { eats: true };
let dog = { breeds: "Labrador" };
// Modern way (recommended)
Object.setPrototypeOf(dog, animal) //Now the dog's protype is animal
// Older way (avoid)
// dog.__proto__ = animal;

console.log(dog.eats);
console.log(Object.getPrototypeOf(dog) === animal); //true
console.log(Object.getPrototypeOf(animal) === Object.prototype);//true
// animal was created using an object literal, so its prototype is Object.prototype
console.log(Object.getPrototypeOf(dog) === Object.prototype);//false
//dog was created using Object.create(animal), its prototype is animal, not Object.prototype. 

