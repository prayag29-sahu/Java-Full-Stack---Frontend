function promiseFive() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true;
            if (!error) {
                resolve({ username: "javascript", password: "123" });
            } else {
                reject('ERROR: JS went wrong');
            }
        }, 1000);
    });
}

async function consumePromiseFive() {
    try {
        const response = await promiseFive();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();
