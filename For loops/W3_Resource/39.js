// 39. Write a program in C to find the number and sum of all integer between 100 and 200 which are divisible by 9
let sum = 0;
for (var i = 1; i < 200; i++) {


    let res = 9 * i;
    if (res > 100 && res <= 200) {
        console.log(res);
        sum += res;
    }
}
console.log("total sum: " + sum);