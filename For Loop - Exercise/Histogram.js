function histogram(input) {
    let n = Number(input[0]); //3

    let numbersInFirstDiapazone = 0.0;
    let numbersInSecDiapazone = 0.0;
    let numbersInThDiapazone = 0.0;
    let numbersInFoDiapazone = 0.0;
    let numbersInFifDiapazone = 0.0;

    let percent1 = 0;
    let percent2 = 0;
    let percent3 = 0;
    let percent4 = 0;
    let percent5 = 0;

    for (let i = 1; i <= n; i++){
        let currentNum = Number(input[i]);
        if (currentNum < 200) {
            numbersInFirstDiapazone ++;
        } else if (currentNum >= 200 && currentNum <= 399) {
            numbersInSecDiapazone ++;
        } else if (currentNum >= 400 && currentNum <= 599) {
            numbersInThDiapazone ++;
        } else if (currentNum >= 600 && currentNum <= 799) {
            numbersInFoDiapazone ++;
        } else {
            numbersInFifDiapazone ++;
        }

        percent1 = numbersInFirstDiapazone / n * 100;
        percent2 = numbersInSecDiapazone / n * 100;
        percent3 = numbersInThDiapazone / n * 100;
        percent4 = numbersInFoDiapazone / n * 100;
        percent5 = numbersInFifDiapazone / n * 100;
    }

    console.log(`${percent1.toFixed(2)}%`);
    console.log(`${percent2.toFixed(2)}%`);
    console.log(`${percent3.toFixed(2)}%`);
    console.log(`${percent4.toFixed(2)}%`);
    console.log(`${percent5.toFixed(2)}%`);

}

histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])

