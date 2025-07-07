// Playing with Types

// Task 1: //Imp***
// Write a function stringToNumber that takes a string input and tries to convert it to a number.
//  If the conversion fails, return "Not a number". //(NOT NaN in short)**


//using built in isNan() function***
function stringToNumber(str) {
  const num = Number(str);
  return isNaN(num) ? "Not a number" : num;
}
console.log(stringToNumber("123"));


// Task 2: //Imp***

// Write a function flipBoolean that takes any input and converts it to its boolean
//  equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

/*Hint: This function will flip true to false, but also 0 to true, null to true, etc.,
 which might be counterintuitive for beginners.
 */
function flipBoolean(input) {
    const boolEqiv = Boolean(input); //dont forget to write this line
    console.log(!boolEqiv);
}
flipBoolean(undefined);


// Task 3: //Most Imp*****

// Write a function whatAmI that takes an input and returns a string describing its
// type after conversion.If it's a number, return "I'm a number!", if it's a string,
// return "I'm a string!"

/* Hint: typeof will return 'object' for arrays, null, and other complex types, which might need additional checks.
Consider expanding this function to handle more types or to be more specific about object types.
 */

function whatAmI(input) {
  const type = typeof input;

  switch (type) {
    case 'number':
      return "I'm a number!";
    case 'string':
      return "I'm a string!";
    case 'boolean':
      return "I'm a boolean!";
    case 'object':
      if (Array.isArray(input)) { 
        return "I'm an array!"; 
      } else if (input === null) { 
        return "I'm null!"; 
      } else { 
        return "I'm an object!"; 
      }
    default:
      return `I'm of type ${type}`; 
  }
}

console.log(whatAmI(6235246)); // Output: "I'm a number!"
console.log(whatAmI("hello")); // Output: "I'm a string!"
console.log(whatAmI(true)); // Output: "I'm a boolean!"
console.log(whatAmI([1, 2, 3])); // Output: "I'm an array!"
console.log(whatAmI(null)); // Output: "I'm null!"
console.log(whatAmI({})); // Output: "I'm an object!"
console.log(whatAmI(new Date())); // Output: "I'm an object!" 



// Task 4: //Imp***

// Write a function isItTruthy that takes an input and returns "It's truthy!" //( NOT truey!)
//  if the value is truthy in JavaScript,
//     or "It's falsey!" if it's falsey.

function isItTruthy(input) {
    const value = Boolean(input);
   if (value==true) {
       return `It's truthy!`;
   } else {
       return `It's falsey!`;
   }
}
console.log(isItTruthy(0));
