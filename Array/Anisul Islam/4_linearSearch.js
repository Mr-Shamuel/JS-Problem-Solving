let number = [1, 2, 3, 4, 5, 6, 7];
// console.log(number.includes(4));
// console.log(number.indexOf(4));

// search a number in the array

let value = 2;
let pos = false;
for (let i = 0; i < number.length; i++) {
    if (number[i] === value) {
        pos = i + 1;
        break;
    }
}
if (pos == false) {
    console.log("not found")
} else {
    console.log(`The value is find at the position of ${pos}`);
}