const counts = {};
const sampleArray = ['a', 'a', 'b', 'c'];
sampleArray.forEach((x) => {counts[x]  = (counts[x] || 0) + 1; });

console.log(counts)




let cnt = {};
let arrays = [1,1,2,2,3,4,5,5,6,7,7,7,8,9,10];
 arrays.forEach((x) =>{ cnt[x] = (cnt[x]||1) + 1});
 console.log(cnt);

// const sampleArray = ['a', 'a', 'b', 'c'];
// const result = new Set(sampleArray);

// console.log(...result)



// 5. Write a program in C to count a total number of duplicate elements in an array.