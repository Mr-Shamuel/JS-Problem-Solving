//27. Write a c program to check whether a given number is a perfect number or not.
"use strict";
const prompt = require("prompt-sync")({ sigint: true });
// const number = prompt("Input number of terms : ");


let num = 153;
let sum = 0;
// while (temp != 0) {
//     let rem = temp % 10;
//     sum = sum + rem * rem * rem;
//     temp = Math.trunc(temp / 10);



// }

for (let temp = num; temp != 0; temp = Math.trunc(temp / 10)) {
    let rem = temp % 10;
    sum = sum + (rem * rem * rem);

}
if (sum === num) {
    console.log("armstrong number");
} else {
    console.log("not armstrong number");
}