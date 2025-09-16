const User = {
    name: 'UserName',
    age: 20,
    isAvailable: true,

    orderChai: function () {
        console.log("User nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(User, "name"));
