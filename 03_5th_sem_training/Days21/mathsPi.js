const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const User = {
    name: 'UserName',
    age: 20,
    isAvailable: true,

    orderChai: function () {
        console.log("User nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(User, "name"));

Object.defineProperty(User , 'name', {
    //writable: false,
    enumerable: true,

})

console.log(Object.getOwnPropertyDescriptor(User, "name"));

for (let [key, value] of Object.entries(User)) {
    if (typeof value !== 'function') {

        console.log(`${key} : ${value}`);
    }
}