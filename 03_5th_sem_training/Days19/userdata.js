function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ username: "User", email: "user@example.com" });
        }, 1000);
    });
}

getUserData().then((user) => {
    console.log(user);
});
