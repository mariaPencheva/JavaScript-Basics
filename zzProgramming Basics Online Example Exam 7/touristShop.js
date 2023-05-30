function touristShop(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let item = "";
    let priceForItem = 0;

    let counter = 0;
    let totalPrice = 0;

    while (command !== "Stop") {
        item = command;
        priceForItem = Number(input[index]);
        index++;
        counter++;

        
        if(counter % 3 === 0){
            priceForItem /= 2;
        }
        
        totalPrice += priceForItem;
        
        
        if (totalPrice > budget){
            break;
        }

        command = input[index];
        index++;

    }

    
    if (command === "Stop"){
        console.log(`You bought ${counter} products for ${totalPrice.toFixed(2)} leva.`);
    }

    if (totalPrice > budget){
        let moneyNeeded = totalPrice - budget;
        console.log(`You don't have enough money!`);
        console.log(`You need ${moneyNeeded.toFixed(2)} leva!`);
    }

}

touristShop([
    "54",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "45"
])