function tournamentChristmas(input){
    let numOfDays = Number(input[0]);
    index = 1;

    let command = input[index];
    index++;
    
    let totalMoney = 0;
    let totalWinsCounter = 0;
    let totalLoseCounter = 0;


    for (let i = 1; i <= numOfDays; i++){
        let winsCounter = 0;
        let loseCounter = 0;
        let dayProfit = 0;

         while(command !== "Finish"){

            // let sport = command;
            let winOrLose = input[index];
            
            if(winOrLose === "win"){
                winsCounter++;
                dayProfit += 20;
            } else if(winOrLose === "lose"){
                loseCounter++;
            }   
            
            index++;
            command = input[index];
            index++;
            
        }

        if(winsCounter > loseCounter){
            dayProfit = dayProfit + (dayProfit * 0.1);
        }
    
        totalWinsCounter += winsCounter;
        totalLoseCounter += loseCounter;
        totalMoney += dayProfit;
        
        command = input[index];
        index++;
    }
        

    if(totalWinsCounter > totalLoseCounter){
        totalMoney = totalMoney + (totalMoney * 0.2);
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

tournamentChristmas([
    "2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"
]);