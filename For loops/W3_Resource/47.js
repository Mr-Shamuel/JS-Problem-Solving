const num = 145;
let sum = 0;
let temp = num;
while (temp != 0) {
    let fact = 1;
    r = temp % 10;


    for (let i = 1; i <= r; i++) {
        fact = parseInt(fact * i);
    }
    sum = sum + fact;
    temp = parseInt(temp / 10);


}
console.log(sum);