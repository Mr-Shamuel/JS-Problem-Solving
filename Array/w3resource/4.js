// 4. Write a program in C to copy the elements of one array into another array.
var arr1 = [10, 20, 30, 40, 50];
let arr3 = [];
for (let i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i];
}


console.log(arr1);
console.log(arr3);