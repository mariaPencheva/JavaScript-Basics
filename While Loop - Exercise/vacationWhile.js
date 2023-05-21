function vacation(input) {
    let index = 0;
    let moneyNeededForVacation = Number(input[index]);
    index++;

    let moneyOnHand = Number(input[index]);
    index++;

    let consecutiveDaysSpend = 0;
    let days = 0 //obsht broi dni

    while(moneyOnHand < moneyNeededForVacation){

        let action = input[index]; // "save" or "spend"
        index++;
    
        let sumSaveOrSpend = Number(input[index]);
        index++;
        
        if(action === "save"){
            moneyOnHand += sumSaveOrSpend;
            consecutiveDaysSpend = 0;
            days++;   

        } else if(action === "spend"){

            if(sumSaveOrSpend > moneyOnHand){
                moneyOnHand = 0;
            } else {
                moneyOnHand -= sumSaveOrSpend;
            }

            consecutiveDaysSpend++;
            days++;
        }
        
        if(consecutiveDaysSpend === 5){
            console.log(`You can't save the money.`);
            console.log(`${days}`);
            break;
        } else if(moneyOnHand >= moneyNeededForVacation){
            console.log(`You saved the money for ${days} days.`);
        }

    }

}

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
