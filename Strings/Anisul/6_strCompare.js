let str1 = 'hello';
let str2 = 'mello';
// way 1 
let reslut = str1.localeCompare(str2);
console.log(reslut);  

// way 2 
if(str1===str2){
    console.log("Equal");
}else{
    console.log("Not Equal");
}