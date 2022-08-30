let str = 'w3resource.com';
let str2 =[]
// way 1 
console.log(str.split("").reverse().join(""));

// way 2 
 for(let i =str.length -1; i >= 0; i--){
 str2 = str2 +str[i];
 }

 console.log("The characters of the string in reverse are :"+str2);