"use strict";
const prompt = require("prompt-sync")({ sigint: true });
const number = prompt("Input number of terms : ");
console.log(" The even numbers are : ");
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += 2 * i;
    console.log(`${2 * i}`);
}
console.log("The Sum of even Natural Number upto 5 terms : " + sum);