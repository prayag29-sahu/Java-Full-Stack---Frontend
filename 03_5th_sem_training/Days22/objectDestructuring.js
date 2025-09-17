const { log } = require("async");

let obj = {
    id : 101,
    name : "John",
    age : 22,
    email : "john@example.com"
}

// let ids = obj.id;
// log(ids);

let {id, name, age, email} = obj;
console.log(id, name, age, email);