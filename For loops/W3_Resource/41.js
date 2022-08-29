// 41. Write a program in C to convert a decimal number into binary without using an array.

let number = 10;
let sum = 0;
let temp = number;
let a = [10]
let i = 0;
while (temp != 0) {
    r = temp % 10;
    a[i] = r;
    temp = parseInt(temp / 10);

}