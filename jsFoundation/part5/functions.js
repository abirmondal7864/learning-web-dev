/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/
// function makeTea(typeOfTea) {
//   return `Making ${typeOfTea}`;  //use `` not {} 
// }
// let teaOrder = makeTea("green tea");
// console.log(teaOrder);

/*  //Imp*
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/
// function orderTea(teaType) {
//   function confirmOrder() {
//     return `"Order confirmed for chai"`;
//   }
//   console.log(confirmOrder());
// }
// orderTea("Chai");


/* //Imp**
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

//Arrow function syntax** 
// const arrowFunction = (arg1, arg2, etc) => {
//  // body
// }


// const calculateTotal = (price, quantity) => {
//   return price * quantity;
// }
// let totalCost = calculateTotal(24,98);
// console.log(`Total cost: ${totalCost}`);

/* //Imp****
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/

// const makeTea = (teaType) => {
//   return `Making ${teaType}`;
// };
// const processTeaOrder = (makeTea) => {
//   return makeTea("Earl gray");
// }
// console.log(processTeaOrder(makeTea));


/* //Most Imp*****
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

// function createTeaMaker() {
//   return function (teaType) {
//     return `Making ${teaType}`;
//   }
// }

// const teaMaker = createTeaMaker();
// const teaOrder = teaMaker("green tea");
// console.log(teaOrder);



//Here is well commented version of the code 

// // Define the function `createTeaMaker`
// function createTeaMaker() {
//   // This function returns another function (the inner function)
//   return function(teaType) {
//     // The inner function takes `teaType` as a parameter
//     // and returns a string message using template literals
//     return `Making ${teaType}`;
//   };
// }

// // Call `createTeaMaker` and store the returned inner function (hence "green tea"(see below codes) value for the `teaType`parameter) in `teaMaker`
// const teaMaker = createTeaMaker();

// // Call the `teaMaker` function with "green tea" as an argument
// // "green tea" is passed as the value for the `teaType` parameter in the inner function
// console.log(teaMaker("green tea")); // Outputs: "Making green tea"