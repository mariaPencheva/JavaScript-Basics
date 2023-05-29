function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    index++;

    let bestPlayer = "";
    let bestGoals = Number.MIN_VALUE;

    while(command !== "END"){
        let namePlayer = command; 
        let playerGoals = Number(input[index]);
        
        if(playerGoals > bestGoals){
            bestGoals = playerGoals;
            bestPlayer = namePlayer;
        } 

        if(playerGoals >= 10){
            break;
        }

        index++;
        command = input[index];
        index ++;   
    }

    console.log(`${bestPlayer} is the best player!`);

        if(bestGoals >= 3){
        console.log(`He has scored ${bestGoals} goals and made a hat-trick !!!`);
    } else {
         console.log(`He has scored ${bestGoals} goals.`);
    }

}

bestPlayer([
    "Petrov",
    "2",
    "Drogba",
    "11"
])