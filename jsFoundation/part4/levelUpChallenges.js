/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/
// let array = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedTeas = [];
// for (let index = 0; index < array.length; index++) {
//     if (array[index]==="chai") { //dont use single = ***
//         break;   //break stops the loop*
// }
// selectedTeas.push(array[index]);
// }
// console.log(selectedTeas);


/* //Imp**
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/
// let visitedCities = [];
// let arr = ["London", "New York", "Paris", "Berlin"];
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i]!="Paris") { //Imp**
//       visitedCities.push(arr[i]);
//    }
// }
// console.log(arr);
// console.log(visitedCities);


// //without for loop //using splice***
// let visitedCities = [];
// let arr = ["London", "New York", "Paris", "Berlin"];
// let index = arr.indexOf("Paris");
// if (index !== -1) {
//   // Check if the element exists
//   arr.splice(index, 1); // Remove 1 element at the found index***
// }
// console.log(arr);
// visitedCities = arr;
// console.log(visitedCities);


// //without for loop //using filter***
// let cities = ["London", "New York", "Paris", "Berlin"];
// let visitedCities = cities.filter(arr => arr != "Paris");
// console.log(visitedCities);




/*   //for-of iterate over the values***(NOT keys or indices) of an iterable object, such as arrays, strings, maps, sets, or other iterables.

3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/
 
// let smallNumbers = [];
// let array = [1, 2, 3, 4, 5];
// for (const element of array) {
//    if (element==4) {
//       break;
//    }
//    smallNumbers.push(element);
// }
// console.log(smallNumbers);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/
// let preferredTeas = [];
// let array = ["chai", "green tea", "herbal tea", "black tea"];
// for (const tea of array) {
//    if (tea!=="herbal tea") {
//       preferredTeas.push(tea);
//    }
// }
// console.log(preferredTeas);
   

/*  //Imp*** //for-in is preferable in objects**  //iterates over indices*** (keys for objects) NOT values.

5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
*/

// let cityPopulations = {};
// let citiesPopulation = {
//    "London": 8900000,
//    "New York": 8400000,
//    "Paris": 2200000,
//    "Berlin": 3500000,
// };
// for (const key in citiesPopulation) {
//     if (key=="Berlin") {
//        break;
//    }
//    cityPopulations[key] = citiesPopulation[key]; // Copy population value to new object
//    // cityPopulations.push(`${ key }: ${citiesPopulation[key] }`); //Alternative using Template Literal**
// }
// console.log(cityPopulations);



/*  
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
*/

// let largeCities = {};
// let worldCities = {
//   Sydney: 5000000,
//   Tokyo: 9000000,
//   Berlin: 3500000,
//   Paris: 2200000
// };
// for (const key in worldCities) {
//    if (worldCities[key]<3000000) {
//       continue;
//    }
//    largeCities[key] = worldCities[key];
// }
// console.log(largeCities);


/* //Imp****  //forEach loop cant use break*** 

7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

//how to write a function (classical way)

// function name(params) {
   
// }

//another way of writing function (used in forEach loop)
// ( ) => {
   
// }
   


// let array = ["earl grey", "green tea", "chai", "oolong tea"];
// let availableTeas = [];
// let stop = false; //using a flag*** as forEach loop cant use break** as it uses a function**
   
// array.forEach((element) => {
//    if (stop) return; // Exit early for remaining iterations 

//    if (element === "chai") {   // when "chai" is found
//        stop = true; // set flag to stop further iterations
//    }
//    else {
//       availableTeas.push(element);
//    }
// });
// console.log(availableTeas);



/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/
// let array = ["Berlin", "Tokyo", "Sydney", "Paris"];
// let traveledCities = [];

// array.forEach((element) => {     //array.forEach** //be careful about Syntax***
//    if (element!=="Sydney") {
//       traveledCities.push(element);
//    }
// });
// console.log(traveledCities);


/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/
// let array = [2, 5, 7, 9];
// let doubledNumbers = [];

// for (let index = 0; index < array.length; index++){
//    if (array[index]!==7) {
//       doubledNumbers.push(2 * array[index]);
//    }
// }
// console.log(doubledNumbers);


/*  //Imp***
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/
// let array = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
// let shortTeas = [];

// for (const element of array) {
//    if (element.length> 10) {   //use element.length*** NOT array[element].length as  for-of loop iterates over values directly
//       break;
//    }
//    shortTeas.push(element);
// }
// console.log(shortTeas);
