const prompt = require('prompt-sync')({ sigint32: true });
let num = prompt("Enter a number : ");
let sum = 0;
let temp = num;
while (temp != 0) {

    let fact = 1;
    let rem = temp % 10;
    for (let i = 1; i <= rem; i++) {

        fact = fact * i;
    }

    sum = sum + fact;
    temp = parseInt(temp / 10);
}
if (num == sum) {

    console.log(`${num} is Strong Number`);
} else {
    console.log(`${num} is not Strong Number`);

}