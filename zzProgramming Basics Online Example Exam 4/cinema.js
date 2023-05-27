function cinema (input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let allPeople = 0;
    let pricePerPersonForTicket = 5;
    let totalPricePerGroup = 0;
    let incomes = 0


    while(command !== "Movie time!"){
        let groupOfPeople = Number(command);
        allPeople += groupOfPeople;

        totalPricePerGroup = groupOfPeople * pricePerPersonForTicket;
        
        if(groupOfPeople % 3 === 0){
            totalPricePerGroup -= 5;
        }
        
        if(allPeople > capacity){
            break;
        }
        
        incomes += totalPricePerGroup;

        command = input[index];
        index++;
    }


    if(allPeople > capacity){
        console.log(`The cinema is full.`);
    }

    if (command === "Movie time!"){
        let seatsLeft = capacity - allPeople;
        console.log(`There are ${seatsLeft} seats left in the cinema.`);
    }
    
    console.log(`Cinema income - ${incomes} lv.`);

}

cinema([
    "60",
    "10",
    "6",
    "3",
    "20",
    "15",
    "Movie time!"
])