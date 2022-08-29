// 26. Write a program in C to find the sum of the series 1 +11 + 111 + 1111 + .. n terms.
"use strict";
const prompt = require("prompt-sync")({ sigint: true });
const number = prompt("Input number of terms : ");
console.log(" The even numbers are : ");
let sum = 0;
let temp = 1;

for (let i = 1; i <= number; i++) {


    sum += temp;

    console.log(`${temp} + `);
    temp = temp * 10 + 1;

}
console.log("The Sum is : " + sum);