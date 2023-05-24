function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;

    let sumPrime = 0; //prosto chislo -> deli se na 1 i na sebe si, bez ostatyk!
    let sumNonPrime = 0;

    while (command !== "stop") {
        let currNum = Number(command);

        if (currNum < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;

        for (let divider = 2; divider < currNum; divider++) {
            if (currNum % divider === 0) {
                isPrime = false;
                break;
            }

        }

        if (isPrime == true) {
            sumPrime += currNum;
        } else {
            sumNonPrime += currNum;
        }

        command = input[index];
        index++;

    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

}

sumPrimeNonPrime([
    "3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"
]);