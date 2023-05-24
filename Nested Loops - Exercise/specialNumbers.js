function specialNumbers(input) {
    let n = Number(input[0]);
    let result = "";

    for (let first = 1111; first <= 9999; first++) {

        let firstToStr = first.toString();
        let isSpecial = true;

        for (let index = 0; index < firstToStr.length; index++) {

            let currDigit = Number(firstToStr[index]);

            if (n % currDigit !== 0) {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial === true) {
            result += `${firstToStr} `;
        }
    }

    console.log(result);

}

specialNumbers(["3"]);