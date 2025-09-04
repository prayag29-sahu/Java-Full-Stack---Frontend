function timerSync(fun) {
    console.log("Timer started");
    fun()
}

function timer(fun) {
    for (let i = 0; i <= 5; i++) {

        setTimeout(() => {
            console.log(i)
            if (i === 5) {
                fun(); // Call fun after the last number is printed
            }
;
        }, i * 1000)
    }
}
function timeout() {
    setTimeout(() => {
        console.log("Timer finished");
    }, 1000);
}

timerSync(() => {
    timer(() => {
        timeout()
    })
});
