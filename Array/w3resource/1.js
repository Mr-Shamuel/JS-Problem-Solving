"use strict";
const prompt = require("prompt-sync")({ sigint: true });
const number = prompt("Input number of terms : ");
let arr = []
for (let i = 0; i < number; i++) {
    arr[i] = prompt();


}


for (let j = 0; j < number; j++) {
    console.log(arr[j]);
}