function barcodeGenerator(input) {
    let firstNum = input[0];
    let secNum = input[1];

    let result = "";

    for (let i = firstNum.charAt(0); i <= secNum.charAt(0); i++) {
        for (let j = firstNum.charAt(1); j <= secNum.charAt(1); j++) {
            for (let k = firstNum.charAt(2); k <= secNum.charAt(2); k++) {
                for (let m = firstNum.charAt(3); m <= secNum.charAt(3); m++) {

                    //let currDigit = Number(input[i]);

                    if (Number(i) % 2 !== 0 && Number(j) % 2 !== 0 && Number(k) % 2 !== 0 && Number(m) % 2 !== 0)  {
                        result += `${i}${j}${k}${m} `;
                    }

                }
            }

        }
        
    }
    console.log(result);


}



barcodeGenerator([
    "2345",
    "6789"
])