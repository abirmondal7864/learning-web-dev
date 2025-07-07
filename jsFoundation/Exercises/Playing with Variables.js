// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
    const result = a + b;
    return result;
}
console.log(add(a,b));

// Subtract small value from larger one //Imp***
function subtract() {
    const result = Math.abs(a - b);   //Math.abs() to find absolute value
    return result;
}
console.log(subtract(a,b));


function multiply() {
    const result = a * b;
    return result;
}
console.log(multiply(a, b));


// Divide larger value by small //Imp****
function divide() {
    const result = Math.max(a, b) / Math.min(a, b); //To get larger as numerator and smaller as denominator
    return result;
    
}
console.log(divide(a,b));


// Increase value of a by 1 //Imp****
function increment() {
    let result = a;
    result += 1; //const cant be incremented**
    return result;

}
console.log(increment(a));


// Decrease value of b by 1
function decrement() {
  let result = b;
  result -= 1; //const cant be decremented**
  return result;
}
console.log(decrement(b));


// Divide larger value by small to find the reminder***
function reminder() {
    const result = Math.max(a, b) % Math.min(a, b)
    return result;
}
console.log(reminder(a,b));
