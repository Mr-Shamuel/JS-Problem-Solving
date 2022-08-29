"use strict";
const prompt = require('prompt-sync')({ sigint32: true });
let num = prompt("Enter a number : ");
let sum = 0;
let temp = num;
while (temp != 0) {
    let rem = temp % 10;
    sum = (sum + rem); //Math.trunc for integer value;
    temp = Math.trunc(temp / 10);

}
console.log(`Sum of digits of ${num} is : ${parseInt(sum)}`);