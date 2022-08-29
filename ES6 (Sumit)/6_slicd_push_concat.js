//array slice
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const res = numbers.slice(2, 7);
console.log(res)

//array splice 
const res2 = numbers.splice(2, 3, 10, 20, 30, 40, 50, "sam");
console.log(res2);
console.log(numbers);

//array concat

const arr1 = [2, 4, 6, 8];
const arr2 = [1, 2, 3, 4, 5, ...arr1];
// const arr3 = [...arr1, ...arr2]
console.log(arr2)

//array push

arr1.push(55, 55, 55, 55, 55, 55);
console.log(arr1);