// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


if (0) {
    console.log("truthy");
} else {
    console.log("falsy");
    
}

let a  // undefined

if (a)
{
    console.log("truthy");
} else {
    console.log("falsy");
    
}

let str = ""

if (str) {
    console.log("truthy");
} else {
    console.log("falsy");
}