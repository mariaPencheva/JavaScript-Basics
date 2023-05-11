function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = input[2];

    let rent = 0;

    switch (season) {
        case "Spring":
            rent = 3000;            
            break;
        case "Summer":
        case "Autumn":
            rent = 4200;            
            break;
        case "Winter":
            rent = 2600;            
            break;
    }

    if (fishermen <= 6) {
        rent *= 0.9;
    } else if (fishermen >= 7 && fishermen <= 11) {
        rent *= 0.85;
    } else if (fishermen >= 12) {
        rent *= 0.75;
    }

    if (season !== "Autumn" && fishermen % 2 === 0 ) {
        rent *= 0.95;
    }

    if (budget >= rent) {
        let moneyLeft = budget - rent;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else if (budget < rent) {
        let moneyNeed = rent - budget;
        console.log(`Not enough money! You need ${moneyNeed.toFixed(2)} leva.`);
    }
}

fishingBoat(["2000", "Winter", "13"]);





