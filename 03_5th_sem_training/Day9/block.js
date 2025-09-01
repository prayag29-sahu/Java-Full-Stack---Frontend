{
    console.log(5);
}
// 5


// let or const block scope
{
    let a=10
    console.log(a); // 10
}
console.log(a); // a is not define

// var access outside block
{
    var a=10
    console.log(a); // 10
}
console.log(a); // 10

let b = 10
{
    let b=5

}
console.log(b); // 10

var c = 10
{
    var c=5

}
console.log(c); // 5

