// 7. Write a program in javascript to display the multiplication table vertically from 1 to n.
"use strict";
const prompt = require("prompt-sync")({ sigint: true });

let num = Math.trunc(prompt("Input the number (Table to be calculated) : "));

console.log("Multiplication table from 1 to " + num + " : ");
let sum = 0;
for (let j = 1; j <= num; j++) {

    // console.log(2 * j - 1);
    console.log(`The odd numbers are : ${ j+2}`);

    sum += 2 * j - 1;
}
console.log(`The Sum of odd Natural Number upto 10 terms : ${sum}`);