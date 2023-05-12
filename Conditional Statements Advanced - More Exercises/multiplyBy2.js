

function multiplyBy2(input) {
    let result = 0;

    for (let i = 0; i < input.length; i++){
        let curNum = Number(input[i]);
        if (curNum >= 0){
            result = curNum * 2;
            console.log(`Result: ${result.toFixed(2)}`);
        } else {
            console.log(`Negative number!`);
        }
        
    }
    
}

multiplyBy2([
    23.43,
12.3245,
0,
65.23432,
23,
65,
-12

    ])


    // function numbers() {
    //     for (let i = 1; i <=10; i++){
    //         console.log(i);
    //     }
    // }
    // numbers();