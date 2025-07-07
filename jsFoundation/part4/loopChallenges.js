/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/
// let sum=0;
// let i=1;   // i!=0***
// while (i<=5){
//     sum=sum+i;
//     i++;
// }
// console.log(sum);

/*     //Imp***
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/
// let countdown=[];
// let i=5;
// while (i>0){ //Imp***
//    countdown.push(i);
//    i--;
//  console.log(i);
// }
// console.log(countdown);

/* Imp*****  //use chrome for taking input**
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/
// let teaCollection=[];
// let tea;
// do {
//    tea=prompt(`Enter your favorite tea(or write 'stop' to finish): `);
//    if (tea!='stop') {
//    teaCollection.push(tea);
//    }
// } while (tea!='stop');
// console.log(teaCollection);

/*    //Imp**
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/
// let total = 0;
// let i = 1; //Imp**

// do {
//     total += i; // Add the current value of i to total
//     i++;        // Increment i by 1
// } while (i <= 3);

// console.log(total); // Outputs: 6

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/
// let multipliedNumbers=[];
// let array=[2,4,6];
// for (let index = 0; index < array.length; index++) {
//    multipliedNumbers.push(2*array[index]);
// }
// console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/
let cityList=[];
let arr=["Paris", "New York", "Tokyo", "London"];
for(index=0;index<arr.length;index++){
   cityList.push(arr[index]);
}
console.log(cityList);
