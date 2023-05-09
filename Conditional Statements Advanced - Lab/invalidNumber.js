function invalidNumber(input) {
    let num = Number(input[0]);

    if (num >= 100 && num <= 200 || num === 0) {
        console.log();
    } else {
        console.log("invalid");
    }
}
invalidNumber(["75"]);

// reshenie 2:
// let num = Number(input[0]);
// let isValid = num >= 100 && num <= 2;

// if (!isValid || num !== 0) {
//     console.log("invalid");
// }
//     
// }

// reshenie 3:
// let num = Number(input[0]);
// let isValid = num >= 100 && num <= 200 || num ===0;

// if (!isValid) {
//     console.log("invalid");
// }