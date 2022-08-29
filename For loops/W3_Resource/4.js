// 4. Write a program in javascript to read 10 numbers from keyboard and find their sum and average.
"use strict";
const prompt = require("prompt-sync")({ sigint: true });


let sum = 0;
console.log("Input the 10 numbers  : ")
for (let i = 1; i <= 5; i++) {
    let num = Math.trunc(prompt("Test Data  : "));


    sum = sum + num;
}

let average = sum / 10;
console.log("The sum of 10 no is : " + sum);
console.log("The Average is : " + average);