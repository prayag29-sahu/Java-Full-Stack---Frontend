// function outer() {
//     function inner() {
//         console.log("inner");
//     }
//     return inner;
// }
// let ans = outer();
// ans(); // inner

function outer(a) {
    a();
}
function inner() {
    console.log("inner");
}
outer(inner); // inner