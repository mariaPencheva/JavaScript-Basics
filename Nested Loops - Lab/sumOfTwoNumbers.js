function sumOfTwoNumbers(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combCounter = 0;
    let sum = 0;


    for (let i = startInterval; i <= endInterval; i++) {
        for (let j = startInterval; j <= endInterval; j++) {

            sum = i + j;
            combCounter++;

            if (sum === magicNumber) {
                console.log(`Combination N:${combCounter} (${i} + ${j} = ${magicNumber})`);
                break;
            }
        }

        if (sum === magicNumber) {
            break;
        }

    }

    if (sum !== magicNumber) {
        console.log(`${combCounter} combinations - neither equals ${magicNumber}`);
    }

}

sumOfTwoNumbers(["23",
"24",
"20"])

