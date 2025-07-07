
// Arrays and Methods
// Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:

//All codes are taken from given hints in course

// Task 1: Array Filtering  //Imp****

// Write a function filterNumbers(arr) that returns only numbers from a mixed array
function filterNumbers(arr) {
    return arr.filter(item => typeof item === "number");  //Imp***
}
const array = [1, 2, 3, 'a','b','c'];
console.log(filterNumbers(array));


// Task 2: Array Reversal

// Write a function reverseArray(arr) that reverses the array

function reverseArray(arr) {
    return arr.reverse();
}
const arr= [1, 2, 3, 4, 5];
console.log(reverseArray(arr));

// Task 3: Find Maximum in an Array //Imp*****

// Write a function findMax(arr) that returns the largest number in the array

function findMax(arr) {
    return Math.max(...arr);   //careful about syntax***
} //...arr :
// This is the spread syntax (also known as the rest/spread operator).
// It "spreads" the elements of the array arr as individual arguments to the Math.max() function.
const ar = [2, 7, 9, 3, 5];
console.log(findMax(ar));


// Task 4: Remove Duplicates from an Array  //Most Imp*****

// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

//using new Set(array)**

function removeDuplicates(arr) {
    // return Array.from(new Set(arr)); // as in sets,  same elements are not repeatedly taken
    return [...new Set(arr)];  //careful Syntax*** //another way
}
const arra = [1, 2, 3, 3, 4, 5, 5, 5, 6, 7, 8, 9, 6, 3];
console.log(removeDuplicates(arra));



// Task 5: Flatten a Nested Array //Imp***

// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

function flattenArray(arr) {
    const flattened = arr.flat(Infinity);   //using arr.flat(Infinity) to flatten the array to all levels
    return flattened;
}
const arrayy = [1, [2, 9], [4, [2, 6]],5];
console.log(flattenArray(arrayy));
