let num = 100;
let count = 0;
let sum = 0;
for (let i = 1; i < num; i += 4) {
    if (i > 0 && i < 38) {
        console.log(i);
        sum += i;

    }
}

console.log(sum);