console.log('Hello, World!'); // Hello, World! is printed on a new line
process.stdout.write('World!'); 
process.stdout.write('World!');  // World! is printed on the same line as World!World! 

console.table({name: 'John', age: 30}); // prints a table with the key-value pair
console.table([{name: 'John', age: 30}, {name: 'Jane', age: 25}]); // prints a table with the key-value pairs


