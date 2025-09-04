function timerSync() {
    console.log("Timer started");
    for (let i = 0; i <= 5; i++) {

        setTimeout(() => {
            console.log(i);
        }, i * 1000)
    }
    setTimeout(() => {
        console.log("Timer finished");
    }, 6000);
}

timerSync();
