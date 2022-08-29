"use strict";
const prompt = require("prompt-sync")({ sigint: true });
let num1 = prompt("Enter First Number : ")
let num2 = prompt("Enter First Number : ")

function GcdLcm(num1, num2) {

    let n1 = num1;
    let n2 = num2;
    while (n2 != 0) {
        let rem = n1 % n2;
        n1 = n2;
        n2 = rem;
    }
    let gcd = n1;
    let lcm = (num1 * num2) / gcd;
    console.log(`GCD of ${num1} and  ${num2} is : ${gcd}`);
    console.log(`LCM of ${num1} and  ${num2} is : ${lcm}`);
}

GcdLcm(num1, num2);