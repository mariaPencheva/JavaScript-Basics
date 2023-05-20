function tennisRanklist(input) {
    let tourney = Number(input[0]);
    let startPoints = Number(input[1]);

    let middPoints = 0;
    let tourneyWonPercent = 0;

    for (let i = 2; i <= tourney + 1; i++) {
        let result = input[i];
        switch (result) {
            case "W":
                startPoints += 2000;
                break;
            case "F":
                startPoints += 1200;
                break;
            case "SF":
                startPoints += 720;
                break;
        }

        if (result === "W") {
            middPoints += 2000;
            tourneyWonPercent++;
        } else if (result === "F") {
            middPoints += 1200;
        } else if (result === "SF") {
            middPoints += 720;
        }
    }

    middPoints = middPoints / tourney;
    tourneyWonPercent = (tourneyWonPercent / tourney) * 100;

    console.log(`Final points: ${Math.floor(startPoints)}`);
    console.log(`Average points: ${Math.floor(middPoints)}`);
    console.log(`${tourneyWonPercent.toFixed(2)}%`);
}

tennisRanklist([
    "5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"
]);
