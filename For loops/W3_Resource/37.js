// 37. Write a program in C to display the number in reverse order.

let number = 12345;
let sum = 0;

for (let temp = number; temp != 0; temp = parseInt(temp / 10)) {
    let r = temp % 10;

    sum = sum * 10 + r;
}
console.log(sum);