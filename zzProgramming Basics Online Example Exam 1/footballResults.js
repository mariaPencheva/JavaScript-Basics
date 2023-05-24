function footballResults(input) {
    let firstGame = input[0];
    let secondGame = input[1];
    let thirdGame = input[2];

    let wons = 0;
    let losses = 0;
    let equality = 0;

    if (firstGame[0] > firstGame[2]){
        wons = wons + 1;
    } else if (firstGame[0] < firstGame[2]){
        losses ++;
    } else {
        equality ++; 
    }

    if (secondGame[0] > secondGame[2]){
        wons = wons + 1;
    } else if (secondGame[0] < secondGame[2]){
        losses ++;
    } else {
        equality ++; 
    }
    
    if (thirdGame[0] > thirdGame[2]){
        wons = wons + 1;
    } else if (thirdGame[0] < thirdGame[2]){
        losses ++;
    } else {
        equality ++; 
    }

    console.log(`Team won ${wons} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${equality}`);

}

footballResults(["3:1", "0:2", "0:0"]);