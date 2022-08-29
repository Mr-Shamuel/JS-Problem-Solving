// 5. Write a program in javascript to display the cube of the number upto given an integer.
"use strict";
const prompt = require("prompt-sync")({ sigint: true });

let num = Math.trunc(prompt("TInput number of terms : "));
for (let i = 1; i <= num; i++) {



    // let cube = Math.pow(num, 3);
    let cube = (i * i * i);
    console.log(`Number is : ${i} and cube of the ${i} is : ${cube}`);
}