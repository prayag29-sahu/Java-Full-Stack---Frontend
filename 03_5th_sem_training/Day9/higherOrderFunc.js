function outer() {
    let user = "name"
    function inner() {
        console.log(user);
    }
    return inner;
}
let ans = outer();
ans(); // inner
// console.log(ans);


// function outer(a) {
//     a();
// }
// function inner() {
//     console.log("inner");
// }
// outer(inner); // inner