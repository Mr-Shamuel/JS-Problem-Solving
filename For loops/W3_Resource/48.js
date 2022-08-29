// 48. Write a C program to find Strong Numbers within a range of numbers.
for (let i = 1; i < 200; i++) {


    let sum = 0;
    let temp = i;
    while (temp != 0) {
        let fact = 1;
        r = temp % 10;


        for (let i = 1; i <= r; i++) {
            fact = parseInt(fact * i);
        }
        sum = sum + fact;
        temp = parseInt(temp / 10);


    }
    if (sum == i) {
        console.log(sum);
    }
}