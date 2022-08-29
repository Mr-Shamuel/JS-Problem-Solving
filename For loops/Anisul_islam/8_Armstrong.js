"use strict";
const prompt = require('prompt-sync')({ sigint32: true });
let num = prompt("Enter a number : ");
let sum = 0;
let temp = num;
while (temp != 0) {

    let rem = temp % 10;
    sum = sum + Math.pow(rem, 3);
    // sum = sum + (rem * rem * rem);
    temp = Math.trunc(temp / 10);

}
if (num == sum) {

    console.log(`${num} is Armstrong `);
} else {
    console.log(`${num} is not Armstrong `);

}