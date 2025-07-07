// Prototypal Inheritance in JavaScript
// Task 1: Create Inheritance Using Prototypes

// Create a constructor Animal with a method makeSound(). Then create a constructor Dog that inherits from
//  Animal and adds a method bark()
function Animal() {
}
Animal.prototype.makeSound= function() { //Imp***
    return 'Animal sound';
}
Animal.prototype.constructor = Animal;//Imp***
function Dog() {
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark=function() {
    return "Woof!";
}
const myDog = new Dog();
console.log(myDog.bark());
console.log(Object.getPrototypeOf(myDog));


// Task 2: Shape and Rectangle Inheritance

// Create a constructor function Shape that takes color as a parameter and has a method getColor() that returns
//  the color.

// Create another constructor Rectangle that inherits from Shape and adds properties width and height. Add a 
// method getArea() to Rectangle that returns the area of the rectangle.

function Shape(color) {
    this.color = color; //Store color in the instance
}
Shape.prototype.getColor=function (color) {
    return this.color;   //Return instance's color
}
Shape.prototype.constructor = Shape;
function Rectangle(width, height, color) { //Imp**
    Shape.call(this, color); // Call Shape's constructor( in the context of the Rectangle instance) with the color
    // The syntax is: functionName.call(thisArg, arg1, arg2, ..., argN)
    
    this.width = width;
    this.height = height;
};
    Rectangle.prototype = Object.create(Shape.prototype); //Inheritance
    Rectangle.prototype.constructor = Rectangle;
    Rectangle.prototype.getArea = function (width, height) {
        return this.width * this.height;  //Imp****   Use this.***
    }
const myRectangle = new Rectangle(6, 5, "Blue");
console.log(myRectangle.getArea());
console.log(myRectangle.getColor());