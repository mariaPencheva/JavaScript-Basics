function graduation(input) {
    let name = input[0];

    let index = 1;
    let grade = Number(input[index]); //5ca w 1 klas

    let sumGrades = 0;
    let excluded = 0; //izkliuchen


    while (index <= 12) {

        if (grade < 4) {
            excluded++;
        }

        if (excluded > 1) {
            console.log(`${name} has been excluded at ${index - 1} grade`);
            break;
        }

        sumGrades += grade;
        index++
        grade = Number(input[index]);

    }
    let avrGrades = sumGrades / 12;

    if (excluded < 2) {
        console.log(`${name} graduated. Average grade: ${avrGrades.toFixed(2)}`);
    }
}


graduation([
    "Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"
])
