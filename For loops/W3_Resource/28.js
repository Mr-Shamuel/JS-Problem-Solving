//28. Write a c program to find the perfect numbers within a given number of range.
"use strict";
const prompt = require("prompt-sync")({ sigint: true });



let n, i

for (n = 1; n <= 50; n++) {

    let sum = 0;

    for (i = 1; i < n; i++) {
        if (n % i == 0)
            sum = sum + i;

    }
    if (sum == n)
        console.log(" ", n);
}