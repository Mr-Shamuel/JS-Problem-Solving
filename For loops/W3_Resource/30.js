// 30. Write a C program to find the Armstrong number for a given range of number.
for (let i = 1; i <= 1000; i++) {
    let temp = i;
    let sum = 0;
    while (temp != 0) {
        let r = temp % 10;
        sum = sum + (r * r * r);
        temp = Math.trunc(temp / 10);
    }

    if (sum == i) {
        console.log(sum);
    }
}