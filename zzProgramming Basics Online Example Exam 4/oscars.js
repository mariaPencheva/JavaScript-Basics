function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let academyPoints = Number(input[index]);
    index++;
    let judgesCount = Number(input[index]);
    index++;


    for (let i = 0; i < judgesCount; i++) {
        let judgeName = input[index];
        index++;
        let judgePoints = Number(input[index]);

        let pointsWon = judgeName.length * judgePoints / 2; //дължината на името на оценяващия умножено по точките, които дава, делено на две
        academyPoints += pointsWon;

        if (academyPoints > 1250.5) {
            break;
        }
        
        judgeName = input[index];
        index++;
    }

    if (academyPoints > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
        } else if (academyPoints <= 1250.5) {
        let pointsNeeded = 1250.5 - academyPoints
        console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
    }

   
}

oscars(['Zahari Baharov',
    205,
    4,
    'Johnny Depp',
    45,
    'Will Smith',
    29,
    'Jet Lee',
    10,
    'Matthew Mcconaughey',
    39]);