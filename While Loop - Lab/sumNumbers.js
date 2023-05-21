function sumNumbers(input) {

    let goalNumber = Number(input[0]); 
    let sumNumbers = 0;
    let index = 1; 
    let currNumb = Number(input[index]);

    while (sumNumbers < goalNumber) {
        sumNumbers += currNumb;
        index++;
        currNumb = Number(input[index]);
    }

    console.log(sumNumbers);
}

sumNumbers([
    "100",
    "10",
    "20",
    "30",
    "40"
])
