// Classes, Objects, and Inheritance
// Task 1: Class Inheritance

// Create a class Vehicle with properties make and model, and a method getDetails() that returns a string
//  "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() 
// that returns "Engine started".

// Task 2: Method Overriding in Inheritance

// Extend the Vehicle class from the previous task to include a method move() that returns"The vehicle is moving".
//  Then, override the move() method in the Car class to return "The car is driving".

// Task 3: Static Methods in Classes

// Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of
//  Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }  
  getDetails() {  //write getDetails(){} inside class*** (write this.getDetails if inside function)
    return `Make: ${this.make}, Model: ${this.model}`;
  }  
  move() {
    return `The vehicle is moving`;
  }
  static isVehicle(obj) {
    return obj instanceof Vehicle; // Use instanceof***** for inheritance check
  }
}  
class Car extends Vehicle {
  constructor(make, model) { // Car needs its own constructor
    super(make, model);       // Call the parent's constructor using super***
  }  
  startEngine(){
    return `Engine started`;
  }  
  move() { // Overriding the move() method
     return `The car is driving`;
   }
}  
let myCar = new Car("Toyota","Camry");
console.log(myCar.getDetails());
console.log(myCar.startEngine());
console.log(myCar.move());

let myVehicle = new Vehicle("Honda", "Civic");
console.log(myVehicle.getDetails());
console.log(myVehicle.move());

console.log(Vehicle.isVehicle(myCar));       // Output: true (Car is a subclass of Vehicle)
console.log(Vehicle.isVehicle(myVehicle));   // Output: true (myVehicle is a Vehicle)
console.log(Vehicle.isVehicle({}));          // Output: false (A plain object is not a Vehicle)
console.log(Vehicle.isVehicle(new Date()));  // Output: false (A Date object is not a Vehicle)


