const prompt = require('prompt-sync')({ sigint32: true });
let num = prompt("Enter a number : ");
let count = 0;
while (num != 0) {

    num = parseInt(num / 10);

    count++;
}
console.log(`number of digits: ${count}`);