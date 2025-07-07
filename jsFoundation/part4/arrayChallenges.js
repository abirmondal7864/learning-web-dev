/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/
let teaFlavors= ["green tea","black tea","oolong tea"];
const firstTea=teaFlavors[0]; //use const not let**
console.log(firstTea);
/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/
let cities=["London","Tokyo","Paris","New York"];
const favoriteCity=cities[2];
console.log(favoriteCity);
/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
let teaTypes=["herbal tea","white tea","masala chai"];
teaTypes[1]="jasmine tea";
console.log(teaTypes[1]);
/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/
let citiesVisited=["Mumbai","Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);
/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
const teaOrders=["chai","iced tea","matcha ","earl gray"];
const lastOrder=teaOrders.pop();
console.log(lastOrder);
/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
 let popularTeas=["green tea","oolong tea","chai"];
 const softCopyTeas= popularTeas;
 console.log(softCopyTeas);

/*  //Imp***
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/
let topCities=["Berlin","Singapore","New York"];
let hardCopyCities=[...topCities]; //perferred way
// let hardCopyCities=topCities.slice(); //another way using methods

console.log(hardCopyCities);
topCities.pop();
console.log(hardCopyCities);

/*  //Imp***
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
let europeanCities=["Paris","Rome"];
let asianCities=[" Tokyo","Bangkok"];
// const worldCities=europeanCities+asianCities; //it doesnt write as an array but a string
// const worldCities=[europeanCities+asianCities]; //creates 2d arrays

//So the solution is to concatenate two arrays***
const worldCities=europeanCities.concat(asianCities);
console.log(worldCities);
/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/
let teaMenu=["masla chai","oolong tea","green tea",'earl gray'];
const menuLength= teaMenu.length; //**
console.log(menuLength);

/* //Imp****
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/
let cityBucketList=["kyoto","London","Cape town","Vancouver"];
let isLondonInList=cityBucketList.includes("London"); // arr.includes("element")****
console.log(isLondonInList);
let isBangkokInList=cityBucketList.includes("Bangkok");
console.log(isBangkokInList);



