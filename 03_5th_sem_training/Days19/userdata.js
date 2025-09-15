function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ username: "Chai", email: "chai@example.com" });
        }, 1000);
    });
}

getUserData().then((user) => {
    console.log(user);
});
