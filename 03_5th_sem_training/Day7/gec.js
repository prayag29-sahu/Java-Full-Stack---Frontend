// var a = 5;
// let c = 10;
// console.log(a);
// console.log(c);

/**
1. var -> function scope
2. let, const -> block scope
3. const -> block scope, cannot be reassigned
4. their exixt a window which has lot of files 
    consloe.log(window) and when we declare b=5 without using let,var,const the b=5 store in window object  

5. Global exicution context (GEC) which have 2 phases one is memory 
    creator and another one memory exicution steps - 
    step 1. var a=5 which memory creator ussign a=undefine
    step 2. let c=10 which memory creator ussign c=undefine
    again -
    step 1. in memory execution a=5 define
    step 2. in code execution c=10 define
    after if console.log(a);
            console.log(c); print
    
 */

// var a = 5
// function Sum(){
//     var b = 10;
//     console.log(b)
// }
// Sum()
// console.log(a);

// var a = 5
// function Sum(){
//     return a;
// }
// let data = Sum()
// console.log(data);


// console.log(a)
// var a = 5  // undefined

// console.log(a)
// let a = 5; // a not initialize

// let a=5
// function sum() {
//     console.log(c);
// }
// var c = 20
// sum()
// console.log(a)
// 20
// 5

// let a = 5
// function sum() {
//     console.log(c);
// }
// sum()
// var c = 20
// console.log(a)
// undefined
// 5