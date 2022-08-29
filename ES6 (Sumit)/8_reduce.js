let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, "sam"];
var sum = num.reduce((p, c, i, a) => {
    return p + c;
})
console.log(sum)