function easterParty(input) {
    let guests = Number(input[0]);
    let pricePerGuest = Number(input[1]);
    let budget = Number(input[2]);

    let priceWithDiscountPerGuest = 0;

    if(guests >= 10 && guests <= 15){
        priceWithDiscountPerGuest = 0.85 * pricePerGuest;
    } else if (guests > 15 && guests <= 20){
        priceWithDiscountPerGuest = 0.80 * pricePerGuest;
    } else if (guests > 20){
        priceWithDiscountPerGuest = 0.75 * pricePerGuest;
    } else {
        priceWithDiscountPerGuest = pricePerGuest;
    }

    let cakePrice = budget * 0.1;

    let totalSum = priceWithDiscountPerGuest * guests + cakePrice;

    if (budget >= totalSum){
        let moneyLeft = budget - totalSum;
        console.log(`It is party time! ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalSum - budget;
        console.log(`No party! ${moneyNeeded.toFixed(2)} leva needed.`);
    }
    
}

easterParty(["18", "30", "450"]);