"use strict";
const prompt = require("prompt-sync")({ sigint: true });

while (true) {
    const num = prompt("Enter a number: ");

    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;

    }
    console.log(fact);
}