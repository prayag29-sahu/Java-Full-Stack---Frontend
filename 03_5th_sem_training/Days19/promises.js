function getUserWithErrorHandling() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true;
            if (!error) {
                resolve({ username: "hitesh", password: "123" });
            } else {
                reject('ERROR: Something went wrong');
            }
        }, 1000);
    });
}

getUserWithErrorHandling()
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log('The promise is either resolved or rejected'));
