// 10. Write a program in C to separate odd and even integers in separate arrays. Go to the editor 

let array =  [25,47,42,56,32];
let array2 = [];
let array3 = [];
let even = 0;
let odd = 0;

for( let i = 0; i < array.length; i++ ) {
    if( array[i] % 2 == 0 ) {
        array2.push(array[i]);
        even++;
    }
    else{
        array3.push(array[i]);
        odd++;
    }
}

for( let j of array2){
    console.log("Even element : "+j);
}


for( let k of array3){
    console.log("Odd element : "+k);
}
 




// let arr =  [25,47,42,56,32];
 
// for( let i of arr){
    
//     if(i%2==0){
//         console.log("The Even elements are : "+i);
 
//     }else{
//         console.log("The odd elements are : "+i);

//     }
// }

// way 2 

// let e = 0;
// let o = 0;
// let x = [];
// let y= [];
// for (let i = 0; i < arr.length; i++) {
//  if( arr[i] % 2 == 0){
//     x[e]  =  arr[i];
//     e++;
    
//  }
//  else{
//     y[o] = arr[i];
//     o++;
//  }

// }
// for(let i = 0; i < e; i++) {
//     console.log(" Even Number "+x[i])

// }
// for(let j = 0; j<o; j++) {
//     console.log(" odd Number "+y[j])

// }


