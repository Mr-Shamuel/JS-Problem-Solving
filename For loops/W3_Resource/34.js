// 34. Write a program in C to find the prime numbers within a range 
for (i = 2; i < 50; i++) {
    let count = 0;
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            count++;
            break;

        }

    }
    if (count == 0) {
        console.log(i);
    }

}