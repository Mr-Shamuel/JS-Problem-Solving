// 2. Write a program in C to find the length of a string without using library function. 

"use strict";
const prompt = require("prompt-sync")({sigint:true});
const data = prompt("Input the String : ");
let l = 0;
// console.log("Length of the string is : "+data.length);
while(data[l]!==undefined){
    l++;
} 
console.log(l);

// way 2 
console.log("Length of the string is : "+data.length);
