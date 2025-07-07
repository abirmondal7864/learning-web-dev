//Number

let balance = 100;
let anotherBalance = new Number(100);

// console.log(balance); //100
// console.log(anotherBalance); //[Number: 100]

console.log(typeof balance); //number
console.log(typeof anotherBalance); //object

//Null and Undefined
let emptyValue = null;
let anotherEmptyValue;
console.log(emptyValue); //null
console.log(anotherEmptyValue); //undefined

//String
let message = "Hello";
let username = "Abir";
 
let oldGreet = message + " " + username;    //old way
 console.log(oldGreet); 
 let anotherGreet = message.concat(" ", username); //another way
 console.log(anotherGreet);

 let newGreet = `${message} ${username}`;    //new way
     console.log(newGreet); 
let myGreet= `Hello ${username}`;    //template literal way 
    console.log(myGreet); 
 
let demo0ne =`Value is ${2*3}`;  //Value is 6
console.log(demo0ne);  

//Symbol    //unique value that's used for object property keys
let sm1=Symbol('fool');
let sm2=Symbol('fool');
console.log(sm1); //Symbol(fool)
console.log(sm2); //Symbol(fool)

console.log(sm1===sm2); //false ***
//Every time you create a new symbol, it's guaranteed to be unique.***
//You can also give a symbol a description, which can be useful for debugging purposes.



