
let a = [2, "hello", true, false, "hey", 4, 6]
let integer = []
let str = []
let bool = []


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

