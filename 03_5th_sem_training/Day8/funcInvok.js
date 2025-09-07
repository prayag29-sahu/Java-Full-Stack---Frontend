// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TOO ${name}`);
})('prayag')


