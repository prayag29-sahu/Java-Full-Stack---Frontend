function asyncTaskOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async task 1 is complete');
            resolve();
        }, 1000);
    });
}

asyncTaskOne().then(() => {
    console.log('Promise consumed');
});
