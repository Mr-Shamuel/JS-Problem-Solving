// "use strict";
// const ps = require("prompt-sync");
// const prompt = ps({ sigint: true });


"use strict";
const prompt = require("prompt-sync")({ sigint: true });



while (1) {
    const num = prompt("Enter a number : ");
    for (let i = 1; i <= 10; i++) {
        // const number = num * i;
        console.log(num + " X " + i + " = " + num * i);
        // console.log(`${num} * ${i}  = ${number}`);

    }
}