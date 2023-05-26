function easterGuests(input) {
    let guests = Number(input[0]);
    let budget = Number(input[1]);

    let pricePerEgg = 0.45;
    let pricePerEasterBread = 4;

    let easterBreadNeeded = Math.ceil(guests / 3);
    let eggsNeeded = guests * 2;

    let totalForEggs = eggsNeeded * pricePerEgg;
    let totalForEasterBread = easterBreadNeeded * pricePerEasterBread;

    let totalSum = totalForEggs + totalForEasterBread;

    if (totalSum <= budget) {
        let moneyLeft = Math.abs(totalSum - budget);
        console.log(`Lyubo bought ${easterBreadNeeded} Easter bread and ${eggsNeeded} eggs.`);
        console.log(`He has ${moneyLeft.toFixed(2)} lv. left.`);
    } else {
        let moneyNeeded = Math.abs(totalSum - budget);
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${moneyNeeded.toFixed(2)} lv. more.`);
    }

}

easterGuests(["9", "12"]);