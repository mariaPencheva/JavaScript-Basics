function safari(input) {
    let budget = Number(input[0]);
    let liters = Number(input[1]);
    let day = input[2];

    let pricePerLiter = 2.1;
    let tourGuidePrice = 100;

    let totalPriceLiters = pricePerLiter * liters;
    let totalPrice = totalPriceLiters + tourGuidePrice;

    switch (day) {
        case "Saturday":
            totalPrice *= 0.9;    
            break;
        case "Sunday":
            totalPrice *= 0.8;
            break;
       
    }

    if (budget >= totalPrice){
        let moneyLeft = budget - totalPrice;
        console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money! Money needed: ${moneyNeeded.toFixed(2)} lv.`);
    }

}

safari(["1000", "10", "Sunday"]);