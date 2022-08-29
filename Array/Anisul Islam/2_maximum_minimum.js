//maximum & minimum number of Array
// let arr = [5, 4, 3, 2, 1, 6, 7, 8, 10];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));


"use strict"
const prompt = require("prompt-sync")({ sigint: true });

const number = prompt("Enter number : ");
const array = [];


//find Max and  minimum Numbers

for (let i = 0; i < number; i++) {
    array[i] = prompt();
}

let max = array[0];
let minimum = array[0];

for (let j = 1; j < array.length; j++) {
    if (max < array[j]) {
        max = array[j];
    }
    if (minimum > array[j]) {
        minimum = array[j]
    }
}
console.log("So The minimum Number is :  " + max);
console.log("So The minimum Number is :  " + minimum);