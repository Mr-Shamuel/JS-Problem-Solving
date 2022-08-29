// 32. Write a C program to determine whether a given number is prime or not. 
let num = 130;
let count = 0;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        count++;
        break;
    }
}
if (count == 0) {
    console.log("Prime Number")
} else {
    console.log('Not a prime number')
}