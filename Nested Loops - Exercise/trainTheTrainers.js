function trainTheTrainers(input) {
    let index = 0;
    let judgeCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let totalGradesSum = 0;
    let totalGradesCount = 0;

    while (command !== "Finish") {

        let presentationName = command;
        let gradeSum = 0;

        for (let i = 0; i < judgeCount; i++) {    //broqch za ocenki
            let currGrade = Number(input[index]);
            index++;

            gradeSum += currGrade;
        }

        let avgGrade = gradeSum / judgeCount;
        console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);

        totalGradesSum += avgGrade;
        totalGradesCount++;

        command = input[index];
        index++;
    }

    let finalAvgGrade = totalGradesSum / totalGradesCount;
    console.log(`Student's final assessment is ${finalAvgGrade.toFixed(2)}.`);

}


trainTheTrainers([
    "2",
    "While-Loop",

    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"
])
