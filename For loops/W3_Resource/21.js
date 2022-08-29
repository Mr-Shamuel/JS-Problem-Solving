// 21 Write a program in C to display the sum of the series [ 9 + 99 + 999 + 9999 ...].
"use strict";
const prompt = require("prompt-sync")({ sigint: true });
const number = prompt("Input number of terms : ");

let sum = 0;
let t = 9;
for (let i = 1; i <= number; i++) {


    sum += t;
    console.log(t);
    t = t * 10 + 9;

}
console.log("The Sum of even Natural Number upto 5 terms : " + sum);