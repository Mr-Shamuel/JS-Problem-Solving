// 6. Write a program in C to print all unique elements in an array.  

// let arrays = [1,1,2,2,3,4,5,5,6,7,7,7,8,9,10];
// let result =new Set(arrays);
// let result2 = [...result];
// console.log(result2);


let a = ["1", "1", "2", "3", "3", "1"];
let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique);