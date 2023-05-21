function examPreparation(input) {
    let index = 0;

    let maxBadGrades = Number(input[index]);
    index++;

    let problemName = input[index];
    index++;

    let problemGrade = Number(input[index]);
    index++;

    let sumGrades = 0;
    
    let badGradesCounter = 0;
    let gradesCounter = 0;
    let lastProblemName = ``;

    while(problemName !== `Enough`){
        lastProblemName = problemName;

        if (problemGrade <= 4){
            badGradesCounter++;
        }

        if(badGradesCounter === maxBadGrades){
            break;
        }

    sumGrades += problemGrade;
    gradesCounter++;

    problemName = input[index];
    index++;

    problemGrade = Number(input[index]);
    index++;

    }

    let avgGrades = sumGrades / gradesCounter;

    if(problemName === `Enough`){
        console.log(`Average score: ${avgGrades.toFixed(2)}`);
        console.log(`Number of problems: ${gradesCounter}`);
        console.log(`Last problem: ${lastProblemName}`);
    } else {
        console.log(`You need a break, ${badGradesCounter} poor grades.`);
    }

}
examPreparation([
    "3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
      
]);