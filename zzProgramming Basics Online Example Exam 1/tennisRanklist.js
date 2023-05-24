function tennisRanklist(input) {
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);

    let middPoints = 0;
    let averagePoints = 0;
    let wons = 0;
    let percentWons = 0;

    for(let i = 2; i < input.length; i++){
        let result = input[i];
        
        switch (result) {
            case "W":
                startingPoints += 2000;
                break;
            case "F":
                startingPoints += 1200;
                break;
            case "SF":
                startingPoints += 720;
                break;
        }

    if(result === "W"){
        middPoints += 2000;
        wons++;
    } else if (result === "F"){
        middPoints += 1200;
    } else if (result === "SF") {
        middPoints += 720;
    }

    averagePoints =  middPoints / tournaments
    percentWons = (wons / tournaments) * 100;
    }

    console.log(`Final points: ${startingPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentWons.toFixed(2)}%`);

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
