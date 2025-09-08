for (let i = 1; i <= 5; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 5; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j );
    }
    console.log('------------------');
}