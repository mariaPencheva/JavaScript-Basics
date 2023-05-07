function toyShop(input) {
    let priceExcursion = Number(input[0]);
    let puzzlePcs = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalSum = puzzlePcs * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
    let toysTotalPcs = puzzlePcs + dolls + bears + minions + trucks; 
    
    if (toysTotalPcs >= 50) {
        totalSum = 0.75 * totalSum;     
    }

    totalSum = 0.90 * totalSum;

    // let rent = totalSum * 0.10;
    // let profit = totalSum - rent;

    if (totalSum >= priceExcursion) {
        let moneyEx = totalSum - priceExcursion;
        console.log(`Yes! ${moneyEx.toFixed(2)} lv left.`);
    } else {
        let moneyNeed = priceExcursion - totalSum;
        console.log(`Not enough money! ${moneyNeed.toFixed(2)} lv needed.`)
    }
}
toyShop(["320","8","2","5","5","1"]);
