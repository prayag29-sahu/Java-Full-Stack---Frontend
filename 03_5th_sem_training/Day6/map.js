// for each


// map - not conditional

let arr = [1, 2, 3, 4, 5]

let a = [1, 2, 3, 4, 5, 64, 3, 5, 2, 5, 2, 34]

let data = a.map((value, index, array) => {
    return value * 2
})
console.log(data); // [ 2, 4, 6, 8, 10 ]


// filter - conditional

let b = a.filter((value, index, array) => {
    return value > 2 && value % 2 === 0;
})
console.log(b); // [ 4, 64, 34 ]

let s = a.filter(num => { return num > 2 && num % 2 === 0 }).reduce((sum, num) => sum + num, 0);

console.log(s); // 102

let d = a.sort((a, b) => { return a - b })
// 1-2 = -1 sorted than next 64-3 = 61 positive swap, if equal no change 
console.log(d); // [ 1, 2, 2, 3, 3, 4, 5, 5, 5, 6, 34, 64 ]


// reduce - single value

// let sum = arr.reduce((a, b, c, d) => {
//     return a + b;
// })
// console.log(sum); // 15 here a==1

let sum = arr.reduce((a, b, c, d) => {
    return a + b;
}, 10)

console.log(sum); // 25 here a==10





// object

let obj = {
    id: 1,
    name: "roy",
    age: 23
}
console.log(obj);
console.log(obj.id);
console.log(obj.name);
console.log(obj.age);

let obj1 = {
    sum: function () {
        console.log("sum function");
    }
}

function sum1 (o) {
    console.log(o)
}
sum1(obj)

alert(obj.name)