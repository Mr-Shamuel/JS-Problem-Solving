var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//array find 

const result = numbers.find(function(currentValue) {
    return currentValue > 5;
});
console.log("Find " + result);

// array find index

const result2 = numbers.findIndex((currentValues, index, arr) => {
    return currentValues > 4;
})
console.log(" find Index  : " + result2);

//array filter 
const result3 = numbers.filter((currentValues, index, arr) => {
    return currentValues > 4;
})
console.log(" filter: " + result3);