"use strict";
const prompt = require("prompt-sync")({ sigint: true });

// 1. Write a program in javascript to display the first 10 natural numbers.

for (let i = 1; i <= 10; i++) {
    console.log(i);

}

// 2. Write a javascript program to find the sum of first 10 natural numbers.

let sum = 0;
for (let i = 1; i <= 10; i++) {

    sum = sum + i;
}
console.log("The Sum is : " + sum);



// 3. Write a program in javascript to display then terms of natural number and their sum.


let num = prompt("Test Data  : ");
let sum2 = 0;
console.log("The first 7 natural number is : ")
for (let i = 1; i <= num; i++) {

    sum2 += i;


    console.log(" " + i)
}


console.log("The Sum of Natural Number upto " + num + " terms : " + sum2);