console.log("Namaste, World!")

let greeting = "Namaste, World!"
console.log(greeting)

var a = 5
console.log(a)

// b
// console.log(b) // b is not define

c = 10
console.log(c) // c is not define

var a = 15
console.log(a) // 15

// let a = 20
// console.log(a) // error: Identifier 'a' has already been declared


let arr = [1, 2, 3, 4, 5]
console.log(arr.toString())
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

const con = 10;
console.log(con);


console.log(5 == 5);
console.log(5 == '5');
console.log(5 === '5');
console.log(5 != '5');
console.log(5 !== '5');
console.log([] == []);
console.log({} == {});


// difference between null and undefined
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(typeof null); // object
console.log(typeof undefined); // undefined
let x = null;
let y;
console.log(x);
console.log(y); 

let userName = "John";
let lastName = "Doe";
console.log(userName,lastName);
console.log(userName+lastName);
console.log(`UserName : ${userName}  LastName : ${lastName}`);
