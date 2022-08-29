//35 Write a program in C to display the first n terms of Fibonacci series
num = 10;
let fibo = [0, 1];
for (let i = 2; i < num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]

}
console.log("Fibo series: ", fibo)