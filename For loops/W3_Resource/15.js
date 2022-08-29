// Write a C program to calculate the factorial of a given number.

"use strict";
const prompt = require("prompt-sync")({ sigint: true });

let num = Math.trunc(prompt("Input the number : "));


let factorial = 1;
for (let j = 1; j <= num; j++) {

    factorial *= j;
}
console.log(`The Factorial of 5 is: ${factorial}`);