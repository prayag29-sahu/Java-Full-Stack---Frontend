function asyncTaskTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async task 2 is complete');
            resolve();
        }, 1000);
    });
}

asyncTaskTwo().then(() => {
    console.log('Async 2 resolved');
});
