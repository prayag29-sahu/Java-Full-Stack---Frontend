function validateUserCredentials(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const validUsername = "admin";
            const validPassword = "admin123";

            if (username === validUsername && password === validPassword) {
                resolve({ message: "User validated successfully", username });
            } else {
                reject('ERROR: Invalid username or password');
            }
        }, 1000);
    });
}
