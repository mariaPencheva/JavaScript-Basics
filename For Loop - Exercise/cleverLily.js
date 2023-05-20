function cleverLily(input) {
    let ageLily = Number(input[0]); // N
    let priceWashMash = Number(input[1]);
    let toyPrice = Number(input[2]);

    let stolenMoney = 0;
    let savedMoneyFromRD = 0;
    let money = 10;
    let toyCounter = 0;
    let totalSavedMoney = 0;

    for (let i = 1; i <= ageLily; i++){
        if (i % 2 === 0) {
            savedMoneyFromRD += money;
            money += 10
            stolenMoney ++;
        } else {
            toyCounter ++;
        }
    }

    totalSavedMoney = savedMoneyFromRD - stolenMoney + (toyPrice * toyCounter);

    if (totalSavedMoney >= priceWashMash) {
        console.log(`Yes! ${((totalSavedMoney - priceWashMash).toFixed(2))}`);
    } else {
        console.log(`No! ${((priceWashMash - totalSavedMoney).toFixed(2))}`);
    }
}
cleverLily(["10", "170.00", "6"]);
