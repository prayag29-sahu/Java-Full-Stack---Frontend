// var sum = () => {
//     console.log("hiii");
// };
// sum()
// hiii

// sum()
// var sum = () => {
//     console.log("hiii");
// }
// sum is not a function





// let sum = () => {
//     console.log("hiii");
// };
// sum()
// hiii

// sum()
// let sum = () => {
//     console.log("hiii");
// }
// Cannot access 'sum' before initialization

// const sum = () => {
//     console.log("hiii");
// };
// sum()
//

// sum()
// const sum = () => {
//     console.log("hiii");
// }
//  Cannot access 'sum' before initialization


// {
//     console.log(5);
// }
// 5


// let or const block scope
// {
//     let a=10
//     console.log(a); // 10
// }
// console.log(a); // a is not define

// var access outside block
// {
//     var a=10
//     console.log(a); // 10
// }
// console.log(a); // 10


// let b = 10
// {
//     let b=5

// }
// console.log(b); // 10

// var c = 10
// {
//     var c=5

// }
// console.log(c); // 5

// function sum() {
//     var d=5
// }
// console.log(d); // d is not defined



// proper function
// function num() {
//     console.log("proper function");
// }
// num(); // proper function
// num(); // proper function

// improper function
// let e = 5
// function sum() {
//     e += 5;
//     console.log(e);
// }
// sum(); // 10
// sum(); // 15

function onClick() {
    return () => {
        console.log("Button clicked");
    }
}