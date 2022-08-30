// methode 1 
// let str = "Daffodil";
// let result = str.split('').reverse().join('');
// console.log(result);

// methode 2
 
// let str2 = 'Rashida_Sultana';
// let res = [];
// for(let  i=str2.length-1;i>=0;i-- )
// {
//      res = res + str2[i];
// }
// console.log( res)


// palendrome 1

// let s = 'eyes';
// if(s ===s.split('').reverse().join('')){
//     console.log("palendrome detected");
// }else{
//     console.log("this is not a palendrome");
// }

// palendrome 2 

let str2  =  "eye";
let res2 = '';
for(let i=str2.length-1;i>=0;i--){
    res2 = res2 + str2[i];
}
if(str2 ===res2){
    console.log("palendrome detected");
}else{
    console.log('This is not a palendrome!!');
}
 
