function accountBalance(input) {
    let index = 0;
    let currElement = input[index];

    let totalMoney = 0;

    while (currElement !== "NoMoreMoney") {
        let elementAsNumber = Number(currElement);

        if (elementAsNumber < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        totalMoney += elementAsNumber;
        console.log(`Increase: ${elementAsNumber.toFixed(2)}`);

        //index++;
        currElement = input[++index];
    }

    console.log(`Total: ${totalMoney.toFixed(2)}`);
}

accountBalance([
    "120",
    "45.55",
    "-150"
])
