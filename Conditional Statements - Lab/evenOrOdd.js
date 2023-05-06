function evenOrOdd(input) {

    let a = Number(input[0]);

    if (a % 2 === 0) { //if the rest is zero
        console.log(`even`);
    } else {
        console.log(`odd`);
    }
}
evenOrOdd(["8"])