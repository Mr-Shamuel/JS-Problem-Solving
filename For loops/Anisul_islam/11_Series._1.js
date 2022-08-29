const prompt = require('prompt-sync')({ sigint32: true });
let num = prompt("Enter a number : ");
let sum = 0;
for (let i = 1; i <= num; i++) {
    sum += i;

}
console.log(`1+2+3.......+${num} = ${sum}`);


let num2 = prompt("Enter a number : ");
let sum2 = 0;
for (let i = 1; i <= num2; i++) {
    sum2 += i * i;

}
console.log(`1^2+2^2+3^2.......+${num2} = ${sum2}`);