// using library
const str2 = "Welcome";
const res = str2.split('').reverse().join('');
console.log(res);

// without library
let str = "javascript";
let r = "";
for (let i = str.length - 1; i >= 0; i--) {
    r += str[i];
}
console.log(r);