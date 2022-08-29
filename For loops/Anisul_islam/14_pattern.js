const prompt = require('prompt-sync')({
    sigint32: true
});
let num = prompt("Enter a number : ");

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(i);
    }


}