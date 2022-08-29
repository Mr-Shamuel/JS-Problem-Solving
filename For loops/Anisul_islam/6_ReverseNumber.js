"use strict";
const prompt = require('prompt-sync')({ sigint32: true });
let num = prompt("Enter a number : ");
let sum = 0;
let temp = num;
while (temp != 0) {
    let rem = temp % 10;
    sum = (sum * 10) + rem;
    temp = parseInt(temp / 10); // we can use parseInt or Math.trunc
}
console.log(`Sum of digits of ${num} is : ${(sum)}`);



// let num = "shamuel";
// let num = 123456;
// const result = num.toString().split('').reverse().join('');
// console.log(result);



let str = "HELLO";
var newString = "";
for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
}
console.log(newString);