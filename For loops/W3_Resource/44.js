let num = 15;
let num2 = 20;
let n1 = num;
let n2 = num2;

while (n2 != 0) {
    let rem = n1 % n2;
    n1 = n2;
    n2 = rem;

}
let gcd = n1;
let lcm = (num * num2) / gcd;
console.log("The LCM of 15 and 20 is : " + lcm);