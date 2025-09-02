
let a = [2, "hello", true, false, "hey", 4, 6]


function getString(j) {
    return typeof j === "string" 
}
function getInt(j) {
    return typeof j === "number" 
}
function getBool(j) {
    return typeof j === "boolean" 
}


function getFun(a,fn) {
    let res = []
    for (let i of a) { 
        if (fn(i)) {
            res.push(i);
        }
    }
    return res;
}

console.table({ Integer: getFun(a,getInt), String: getFun(a,getString), Boolean: getFun(a,getBool) });