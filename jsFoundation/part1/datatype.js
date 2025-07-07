console.log("Data Types in JavaScript:");    

// Primitive Data Types: Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Non-Primitive Data Types: Object, Array, Function

console.log("Primitive Data Types:");
// 1. Number
var score = 10; //old fashioned way
let num = 10; // both integers and floating-point numbers
console.log(num);
// 2. String
let str = "Hello"; 
console.log(str);
// 3. Boolean
let bool = true;
console.log(bool);  
// 4. Undefined
let obj;   
console.log(obj);  
// 5. Null
obj = null; 
console.log(obj); 


console.log("Non-Primitive Data Types:");
// 6. Object
let teaTypes= ["lemon tea","oolong tea","orange tea"] // Object is a collection of key-value pairs
console.log(teaTypes);
let user = { name: "John", age: 30 }; // Object is a collection of key-value pairs
console.log(user);
// 7. Array
let arr = [ 1, 2, 3, 4, 5 ];  // Array is a sub-type of object
console.log(arr);
// 8. Function
let func = function() {     // Function is a sub-type of object
    console.log("Hello");   
}
func();
// 9. Symbol
let sym = Symbol( "id" );   // Symbol is a unique and immutable data type
console.log(sym);
// 10. BigInt  
let bigInt = 1234567890123456789012345678901234567890n;     // n is used to define BigInt
console.log(bigInt);
``
