"use strict"
const prompt = require("prompt-sync")({ sigint: true });
const number = prompt("Enter a number : ");

let array = [];
array[0] = 0;
array[1] = 1;

for (let i = 2; i < number; i++) {
    array[i] = array[i - 1] + array[i - 2];


}

for (let j = 0; j < number; j++) {
    console.log(array[j]);
}