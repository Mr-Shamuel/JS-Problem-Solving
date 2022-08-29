// 7. Write a program in C to merge two arrays of same size sorted in decending order.
let arr = [1, 2, 3, 4, 5, 6, 7];
let arr1 =  [0,1,2];
let arr2 = [1,2,3]
let res   =  [...arr1, ...arr2];
console.log(res.sort().reverse());