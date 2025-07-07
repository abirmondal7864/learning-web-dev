// A closure is created when a function (the inner function) is defined inside another function (the outer
// function) and the inner function retains access to the outer function's variables, even after the outer
// function has finished executing.

function outer() {
let counter = 4;
   return function () {
        counter++;  
        return counter;  
    }
} 
let increment = outer(); //increment is a closure

console.log(increment()); //5 
console.log(increment()); //6 //Because of the closure, counter retains its previous value (5).
console.log(increment()); //7
