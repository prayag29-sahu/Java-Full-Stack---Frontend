const user = {
    username: "Prayag",
    age:19
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.age}`);
}

// handleObject(user)
handleObject({
    username: "lucky",
    age: 39
})
