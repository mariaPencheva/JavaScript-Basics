function addBags(input){
    let priceForLuggageOver20Kg = Number(input[0]);
    let luggageKilos = Number(input[1]);
    let daysLefTUntilTrip = Number(input[2]);
    let luggageNum = Number(input[3]);    

    let taxes = 0
    let priceLuggage = 0
    
    if(luggageKilos < 10){
        taxes = priceForLuggageOver20Kg * 0.2;
    } else if (luggageKilos >= 10 && luggageKilos <= 20){
        taxes = priceForLuggageOver20Kg * 0.5;
    } else if (luggageKilos > 20){
        taxes = priceForLuggageOver20Kg;
    }

    if(daysLefTUntilTrip < 7){
        //taxes *= 1.4;
        taxes += 0.4 * taxes
    } else if (daysLefTUntilTrip >= 7 && daysLefTUntilTrip <= 30){
        //taxes *= 1.15;
        taxes += 0.15 * taxes;
    } else if (daysLefTUntilTrip > 30){
        //taxes *= 1.1;
        taxes += 0.1 * taxes; 
    }

    priceLuggage =  luggageNum * taxes;
    console.log(`The total price of bags is: ${priceLuggage.toFixed(2)} lv. `);
}

addBags([
    "25.5",
    "5",
    "36",
    "6"
])
