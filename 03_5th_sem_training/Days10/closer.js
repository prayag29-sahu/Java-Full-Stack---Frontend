// when we return anything it also hold the present function copy

function outer() {
    let user = "name"
    function inner() {
        console.log(user);
    }
    return inner; // the outer context destroy but return contain inner and the copy of outer
}
let ans = outer();
ans(); // inner
// console.log(ans);

// scope of parent called laxical scope