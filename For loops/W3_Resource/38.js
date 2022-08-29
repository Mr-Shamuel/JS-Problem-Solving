// 38. Write a program in C to check whether a number is a palindrome or not. 

let number = 1231;
let sum = 0;
let temp = number;
while (temp != 0) {
    r = temp % 10;
    sum = sum * 10 + r;
    temp = parseInt(temp / 10);

}

if (sum == number) {
    console.log("palendrome");
} else {
    console.log("not a palindrome");

}