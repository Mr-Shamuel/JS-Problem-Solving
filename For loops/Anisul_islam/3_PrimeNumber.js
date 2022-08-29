"use strict";
const prompt = require("prompt-sync")({ sigint: true });


const num = prompt("Enter a number: ");

let count = 0;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        count++;
        break;
    }
}

if (count == 0) {

    console.log(num + "number is prime. ");
} else {
    console.log(num + " number is not prime.");


}