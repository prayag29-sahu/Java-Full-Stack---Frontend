
console.log(addone(5))

function addone(num) {
    return num + 1
}



// addTwo(5)  not initialize addTwo(5) because of hoisting
const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(5));
