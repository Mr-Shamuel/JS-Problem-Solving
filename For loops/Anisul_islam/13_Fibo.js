const prompt = require('prompt-sync')({ sigint32: true });
let num = prompt("Enter a number : ");
let fibo = [0, 1];
for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]

}
console.log(fibo);