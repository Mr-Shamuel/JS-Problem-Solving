// Write a program in C to find the maximum and minimum element in an array. 

let arr = [3, 2, 45, 2, 5, 2, 4, 4, 4, 52, 23, 4, 23, 49];

let maximum = arr[0];
let minimum = arr[0];

for (let p of arr) {
    if (p > maximum) {
        maximum = p;
    }
    if (p < maximum) {
        p = minimum;
    }
}
console.log(maximum , minimum);