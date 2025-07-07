function sayHello() {
  console.log("I would like to say Hello");
}

setTimeout(() => {
  sayHello();
}, 2000); //2 seconds

// The callback function () => { sayHello(); } is scheduled to be placed in the message queue after 2000 milliseconds (4 seconds).
console.log("chaicode"); 

for (let index = 0; index < 10; index++) {
  console.log(index);
} 



