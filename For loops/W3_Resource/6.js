// Write a program in javascript to display the multiplication table of a given integer.
"use strict";
const prompt = require("prompt-sync")({ sigint: true });

let num = Math.trunc(prompt("Input the number (Table to be calculated) : "));

for (let j = 1; j <= 10; j++) {





    console.log(`${num} X ${j} = ${num * j}`);


}