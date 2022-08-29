// object destructuring

const obj = {
        name: " shamuel",
        age: 26,
        gender: "male",
        // company: {
        //     salary: 25000,
        //     name: "xyz"
        // }
    }
    // let { name: n } = obj;
let { company: { salary } = {} } = obj;
console.log(salary);


// Array destructuring ///////////

var arr = [1, 2, 3, ["shamuel", 25, "daffodil  "], 4, 5, 6, 7, 8, 9, 10];
// let [x, y] = arr;
// let [, x, , , , y] = arr;
let [x, , , [p, , university]] = arr;

console.log(x, p, university);