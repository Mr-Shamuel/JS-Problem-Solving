// 11. Write a program in C to sort elements of array in ascending order.
//  way 1 
// let array = [2,7,4,5,9];
// console.log( array.sort());

// way 2 

let arr = [4, 32, 2, 5, 8];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log("Sorted array=>", arr);












// let array2  = array[0];
// let array3  = [];

// for( let i = 0; i < array.length; i++ ) {
 
//  if( array2[i] > array[i]){
//     array[i] = array2[i];

//  }
//  if( array2[i] < array[i]){
//     array[i] = array2[i];

//  }

    
// }

// console.log(array2)
 