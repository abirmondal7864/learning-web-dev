
// Loops
// Task 1: Sum of First N Natural Numbers

// Write a function sumOfN(n) that returns the sum of the first n natural numbers
function sumOfN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumOfN(9));


// Task 2: Multiplication Table //Imp****

// Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4

//Brute force code

// function printMultiplicationTable(n) {
//     for (let i = 1; i <=10; i++) {
//         let mul = `${n} * ${i} = ${n * i}`;
//         console.log(mul);
//     }
// }
// printMultiplicationTable(9);


//Using array***
function printMultiplicationTable(n) {
    const table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(`${n} * ${i} =${n * i}`); //Imp***
    }
    return table;
}
console.log(printMultiplicationTable(9));





// Task 3: Count Vowels in a String //Imp*****

// Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.

//Using for loop

// function countVowels(str) {
//         const vowels = "aeiouAEIOU";
//         let count = 0;
//         for (let i = 0; i < str.length; i++) { //Iterate the string*** NOT vowels
//             if (vowels.includes(str[i])) //compare each char of string*** with each element in vowels
//                 count ++;
//             }
//             return count;
//         }
// console.log(countVowels("Hello, wOrld"));



//Using for of loop

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (const char of str) {      //Iterate the string*** NOT vowels
        if (vowels.includes(char)) { //compare each char of string*** with each element in vowels
            count++;
        }
    }
    return count; //Imp**
}
console.log(countVowels("Hello, wOrld"));
