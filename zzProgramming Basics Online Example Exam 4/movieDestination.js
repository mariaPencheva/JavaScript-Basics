function movieDestination(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let destination = input[index];
    index++;
    let season = input[index];
    index++;
    let numOfDays = Number(input[index]);

    let pricePerDay = 0;

    switch (destination) {
        case "Dubai":
            if(season === "Winter"){
                pricePerDay = 45000;    
            } else if (season === "Summer"){
                pricePerDay = 40000;
            }
            break;

        case "Sofia":
            if(season === "Winter"){
                pricePerDay = 17000;    
            } else if (season === "Summer"){
                pricePerDay = 12500;
            }
            break;

        case "London":
            if(season === "Winter"){
                pricePerDay = 24000;    
            } else if (season === "Summer"){
                pricePerDay = 20250;
            }
            break;
    }

    let totalPrice = pricePerDay * numOfDays;

    if(destination === "Dubai"){
        totalPrice *= 0.7;
    } else if (destination === "Sofia"){
        totalPrice = totalPrice + (totalPrice * 0.25);
    }

    if(budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log(`The budget for the movie is enough! We have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log(`The director needs ${moneyNeeded.toFixed(2)} leva more!`);
    }

}

movieDestination([
    "400000",
    "Sofia",
    "Winter",
    "20"
])