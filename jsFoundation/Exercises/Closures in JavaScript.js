// Closures in JavaScript
// Task 1: Creating a Counter Using Closures

// Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.
function createCounter() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}
const counter = createCounter();
// console.log(counter()); //1
// console.log(counter()); //2
// console.log(counter()); //3


// Task 2: Rate Limiter Function

// Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit
//  time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".

function rateLimiter(fn, limit) {
  let lastCalled = 0;

  // Return a new function that will handle the rate limiting.
    return function (...args) {
      //...args is called the "rest parameter." It allows a function to accept an indefinite number of arguments and gather them into an 
      // array named args. Without ...args, you'd have to know in advance how many arguments the function fn (the one being rate-limited) 
      // expects.
        const now = Date.now();
        
    // Check if enough time has passed since the last successful call.
    if (now - lastCalled >= limit) {
      lastCalled = now;
      // Call the original function 'fn' with the provided arguments.
        return fn(...args);
        
    } else {
      return "Rate limit exceeded";
    }
  };
}

function testFunction(x) {
  return x * 2;
}

// Create a rate-limited version of testFunction, with a limit of 500 milliseconds.
const limitedFuncton = rateLimiter(testFunction, 500);

// // First call: Should be allowed.
// console.log(limitedFuncton(2)); // Output: 4

// // Second call: Should be rate-limited (called too soon).
// console.log(limitedFuncton(3)); // Output: "Rate limit exceeded"

// // Third call: Should be allowed (called after 1000 milliseconds, which is greater than the 500ms limit).
// setTimeout(() => {
//   console.log(limitedFuncton(4)); // Output: 8
// }, 1000);

// Task 3: Memoization Function

// Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls,
//  and return the cached result if the same inputs are provided again.
function memoize(fn) {
  // Create a cache object to store results
  const cache = {};

  // Return a memoized version of the function
  return function (...args) {
    
    // Convert the arguments into a unique string 'key' (the "note") using JSON.stringify
    // This handles complex arguments like objects and arrays.
    const key = JSON.stringify(args);

    // Check if the result is already in the cache
    // if (key in cache) { 
    //or,
    if (cache[key]){
      // If yes, return the cached result
      return cache[key];
    } else {
      // If no, call the original function and store the result
      // const result = fn.apply(this, args); // use apply to maintain 'this' context
      //or,
      const result = fn(...args);
      cache[key] = result;
      // Return the calculated result
      return result;
    }
  };
}

// Example usage:
function add(a, b) {
  console.log("Calculating add:", a, b);
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3)); // First call: calculates and caches
console.log(memoizedAdd(2, 3)); // Second call: returns cached result
console.log(memoizedAdd(4, 5)); // calculates and caches
console.log(memoizedAdd(4, 5)); // returns cached result

function complicatedFunction(obj){
    console.log("processing complicated object: ", obj);
    let sum = 0;
    for (const key in obj){
        if (typeof obj[key] === 'number'){
            sum += obj[key];
        }
    }
    return sum;
}

const memoComplicated = memoize(complicatedFunction);

const obj1 = {a:1, b:2};
const obj2 = {a:1, b:2};

console.log(memoComplicated(obj1));
console.log(memoComplicated(obj2)); //demonstrates that identical objects are treated as the same key.