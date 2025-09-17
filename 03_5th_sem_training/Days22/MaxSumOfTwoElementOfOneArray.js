let a = [1, 2, -3, 5, -5, -3, 5];
let max1 = -Infinity;
let max2 = -Infinity;
let max3 = -Infinity;

for (let i = 0; i < a.length; i++) {
    if (a[i] > max1) {
        max3 = max2;
        max2 = max1;
        max1 = a[i];
    } else if (a[i] > max2) {
        max3 = max2;
        max2 = a[i];
    } else if (a[i] > max3) {
        max3 = a[i];
    }
}

console.log( max1, max2, max3);
console.log( max1 + max2 + max3);
