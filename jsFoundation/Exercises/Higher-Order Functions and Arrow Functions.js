
// Higher-Order Functions and Arrow Functions
// All the following tasks must be strictly be writtern in arrow functions only.

//Solutions:
// const squareNumbers = arr => arr.map(num => num * num);

// const filterEvenNumbers = arr => arr.filter(num => num % 2 === 0);

// const sumPositiveNumbers = arr =>
//   arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);

// const getNames = arr => arr.map(item => item.name);

// const findLongestWord = arr =>
//   arr.reduce(
//     (longest, current) => (current.length > longest.length ? current : longest),
//     ""
//   );

// Task 1: Using Array Methods

// Write a function squareNumbers(arr) using map() and arrow functions
const squareNumbers= arr => {
    const sqNum = arr.map(number => number * number); 
    return sqNum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(squareNumbers(numbers));


// Task 2: Custom Filter Function

// Create a function filterEvenNumbers(arr) using filter() and arrow functions

const filterEvenNumbers = arr => {
    const evenNum = arr.filter(num => num % 2 === 0);
    return evenNum;
}
console.log(filterEvenNumbers(numbers));


// Task 3: Sum of Positive Numbers //Imp***

// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions

const sumPositiveNumbers = arr => {
    const sumPosNum = arr.filter(num => num > 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0); //Imp****
    return sumPosNum;
}
const arr = [-1, -2, 3, 0, 7, -5, -9];
console.log(sumPositiveNumbers(arr));
 

// Task 4: Transform Array of Objects //Imp*****

// Write a function getNames(arr) that takes an array of objects where each object has a name property,
//  and returns an array of just the names using map() and arrow functions

const getNames = arr => {
   return arr.map(obj => obj.name); //Don't forget obj.name***  
  //For each item (which is an object), this code accesses the value associated with the name property
  //  of that object.
    }
const arrayOfObjects = [
    { name: "Ram", age: 22 },
    { name: "Shyam", age: 37}
]
console.log(getNames(arrayOfObjects));


// Task 5: Find the Longest Word //Most Imp*****

// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

//HINT: Using reduce() function***

const findLongestWord = arr => {
    if (!arr||arr.length===0) {
        return ""; 
    }    //handeled empty array case**

    return arr.reduce((longest, currentValue) =>
    { return currentValue.length > longest.length ? currentValue : longest }, "");
    //Initialize with empty string("")**
}

const arrayOfStrings = ["Mango", "Banana", "Litchi", "Dragon Fruit"];
console.log(findLongestWord(arrayOfStrings));
