function step1(fun) {
    setTimeout(() => {
        console.log("step1");
        fun()
    }, 5000)
}
function step2(fun) {
    setTimeout(() => {
        console.log("step2");
        fun()
    }, 4000)
}
function step3(fun) {
    setTimeout(() => {
        console.log("step3");
        fun()
    }, 3000)
}
function step4() {
    setTimeout(() => {
        console.log("step4");

    }, 1000)
}

// step1()
// step2()
// step3()
// step4()


step1(() => {
    step2(() => {
        step3(() => {
            step4()
        })
    })
})