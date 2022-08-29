//27. Write a c program to check whether a given number is a perfect number or not.
"use strict";
const prompt = require("prompt-sync")({ sigint: true });
const number = prompt("Input number of terms : ");

let sum = 0;


for (let i = 1; i < number; i++) {
    if (number % i == 0) {
        console.log(i);
        sum += i;
    }

}
console.log("The sum of the divisor is : " + sum);
if (sum === number) {
    console.log('number is a perfect');
} else {
    console.log('So, the number is not perfect.')
}