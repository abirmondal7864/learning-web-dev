//non primitives are passed by reference and not by value 
let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;
obj2.password = 'easypeasy';
console.log(obj1); //{ name: 'Yao', password: 'easypeasy' }
console.log(obj2); //{ name: 'Yao', password: 'easypeasy' }
//obj2 is a reference to obj1, so when we change obj2, obj1 changes as well.
//obj1 and obj2 are both pointing to the same place in memory.
//This is why objects are called reference types.
//When we copy an object, we're copying a reference to the place in memory where the object is stored.
//This is different from primitive types, which are copied by their value.
//When we copy a primitive, we're copying the actual value of the variable. 
//This is why primitives are called value types.

const username = { //object
    firstName: 'Abir',  
    isLoggedin : true, 
};
console.log(typeof username); //object

console.log(username); //{ firstName: 'Abir', isLoggedin: true }
console.log(username.isLoggedin); //true

username.lastName="Mondal"; //add new property**
username.isLoggedin=false; //change value***


console.log(username); //{ firstName: 'Abir', isLoggedin: false***, lastName: 'Mondal'**}
console.log(username.isLoggedin); //false
console.log(username.firstName); //Abir
console.log(username.lastName); //Mondal


let today = new Date(); //object //Date is a built-in object constructor 
console.log(typeof today); //object
console.log(today); //2025-01-24T08:35:56.000Z
 console.log(today.getFullYear()); //2025
    console.log(today.getMonth()); //0 //0 based index //0=January 
    console.log(today.getDate()); //24
    

//Array is also an object
let colors = ['red', 'green', 'blue']; //array
console.log(typeof colors); //object
console.log(colors); //[ 'red', 'green', 'blue' ]
console.log(colors[0]); //red
colors.push('yellow'); //add new element
console.log(colors); //[ 'red', 'green', 'blue', 'yellow' ]
console.log(colors.length); //4
colors.pop(); //remove last element
console.log(colors); //[ 'red', 'green', 'blue' ]
colors[0] = 'purple'; //change element
console.log(colors); //[ 'purple', 'green', 'blue' ]
 


let isValue='2abc'; 
console.log(Number(isValue));   //Not a Number
console.log(typeof Number(isValue)); //number
console.log(typeof isValue); //string




    
    

 
