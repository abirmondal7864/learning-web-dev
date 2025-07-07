//Module import file

//default import
import multiply from "./mathOperationsM.js";
//or use any name because it is default import!
import myMultiplyFunction from "./mathOperationsM.js"

//named import
import { add ,substract } from "./mathOperationsM.js";

console.log(multiply(2, 3));
console.log(myMultiplyFunction(6,8));
console.log(add(3, 4));
console.log(substract(9, 8));

// A default export is a way to specify a single, primary value that a module exposes.
// Think of it as the "main" thing that the module provides.
// A module can have only one default export.

// When you use export default, you're essentially saying, "This is the main thing I want to make available 
// from this module."