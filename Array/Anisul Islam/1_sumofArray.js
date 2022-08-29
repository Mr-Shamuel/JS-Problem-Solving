"use strict"
const prompt = require("prompt-sync")({ sigint: true });
const number = prompt("Number of Elements : ");
let arr = [];
for (let j = 0; j <= number; j++) {

    arr[j] = parseInt(prompt());
}
console.log((arr));
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

}
console.log(sum);