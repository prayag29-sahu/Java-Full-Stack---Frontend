// console.log(typeof(5));
// console.log(typeof("Hello"));
// console.log(typeof (true));
// console.log(typeof (typeof (true)));
// console.log(typeof (typeof (5)));
// console.log(typeof(null));
// console.log(typeof(undefined));
// console.log(typeof({}));
// console.log(typeof([]));

let a = [2, "hello", true,false,"hey",4,6]
let integer = []
let str = []
let bool = []

// for (let i = 0; i < a.length; i++) {
//     if (typeof a[i] === "number") {
//         integer.push(a[i]);
//     } else if (typeof a[i] === "string") {
//         str.push(a[i]);
//     } else if (typeof a[i] === "boolean") {
//         bool.push(a[i]);
//     }
// }

// console.log("Integer array: ", integer);
// console.log("String array: ", str);
// console.log("Boolean array: ", bool);



for (let i of a) {
    if (typeof i === "number") {
        integer.push(i);
    } else if (typeof i === "string") {
        str.push(i);
    } else if (typeof i === "boolean") {
        bool.push(i);
    }
}

console.table({ Integer: integer, String: str, Boolean: bool });

