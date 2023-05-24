function basketballTournament(input) {
    let index = 0; 
    let tournamentName = "";

    let command = input[index];
    index++;

    let numberOfGames = 0;
    let pointsDesiTeam = 0;
    let pointsOpponent = 0;

    let gameCounter = 0;
    let winsCounter = 0;
    let losesCounter = 0;

    let winsPoints = 0;
    let losesPoints = 0;

    let totalGames = 0;

    while (command !== "End of tournaments"){
        gameCounter = 0;
        tournamentName = command;
        numberOfGames = Number(input[index]);
        index++;

        for(let i = 0; i < numberOfGames; i++){
            pointsDesiTeam = Number(input[index]);
            index++;
            pointsOpponent = Number(input[index]);
            gameCounter ++;

            if(pointsDesiTeam > pointsOpponent){
                winsCounter++;
                winsPoints = pointsDesiTeam - pointsOpponent;
                console.log(`Game ${gameCounter} of tournament ${tournamentName}: win with ${winsPoints} points.`);
            } else if (pointsOpponent > pointsDesiTeam){
                losesCounter++;
                losesPoints = pointsOpponent - pointsDesiTeam;
                console.log(`Game ${gameCounter} of tournament ${tournamentName}: lost with ${losesPoints} points.`);

            }

            index++;
        }

        totalGames += numberOfGames;
        command = input[index];
        index++;
    }
    
    let percentWins = (winsCounter / totalGames) * 100;
    let percentLoses = (losesCounter / totalGames) * 100;
    if(command === "End of tournaments"){
        console.log(`${percentWins.toFixed(2)}% matches win`);
        console.log(`${percentLoses.toFixed(2)}% matches lost`);
    }

}

basketballTournament([
    "Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"
])