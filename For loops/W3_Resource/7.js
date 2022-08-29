// 7. Write a program in javascript to display the multiplication table vertically from 1 to n.
"use strict";
const prompt = require("prompt-sync")({ sigint: true });

let num = Math.trunc(prompt("Input the number (Table to be calculated) : "));

console.log("Multiplication table from 1 to " + num + " : ");
for (let j = 1; j <= num; j++) {

    for (let i = 1; i <= 10; i++) {



        console.log(`${j} X ${i} = ${j * i}`);

    }


}