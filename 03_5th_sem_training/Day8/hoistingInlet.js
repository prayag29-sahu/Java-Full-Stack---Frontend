// agr apne value ko pehle use kr liya ha usme bad declare or initialze krte ha to hoisting ke concept se ye value ko phle top of body declare kr leta ha phir baki exicution means = var a -> consloe.log(a) -> a=5 so o/p undefine 
console.log(a)
var a = 5;  // undefine
// let a=5; // ReferenceError: Cannot access 'a' before initialization means agr valur undefine h to ue let or const me access nhi deta ye case sirf hoisting ke concept me apply hoga 