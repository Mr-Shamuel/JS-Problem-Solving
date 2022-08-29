// 25. Write a program in C to display the n terms of square natural number and their sum. 
"use strict";
const prompt = require("prompt-sync")({ sigint: true });
const number = prompt("Input number of terms : ");

let sum = 0;

for (let i = 1; i <= number; i++) {

    console.log((i * i));
    sum += i * i;

}
console.log("The Sum of Square Natural Number upto 5 terms = " + sum);