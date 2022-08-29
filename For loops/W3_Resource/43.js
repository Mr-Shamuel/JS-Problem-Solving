// 43. Write a C program to find HCF (Highest Common Factor) of two numbers. 
let num = 24;
let num2 = 28;
let n1 = num;
let n2 = num2;

while (n2 != 0) {
    let rem = n1 % n2;
    n1 = n2;
    n2 = rem;

}
let gcd = n1;
console.log("HCF of 24 and 28 is : " + gcd);