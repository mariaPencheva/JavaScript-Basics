function shopping(input) {
    let budgetPeter = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let priceVideocards = videocards * 250;
    let pricePer1Processor = 0.35 * priceVideocards;
    let priceProcessors = pricePer1Processor * processors;
    let pricePer1Ram = 0.10 * priceVideocards;
    let priceRam = ram * pricePer1Ram;

    let totalPrice = priceVideocards + priceProcessors + priceRam;

    if(videocards > processors) {
        totalPrice = 0.85 * totalPrice;
    }

    if(budgetPeter >= totalPrice) {
        console.log(`You have ${(budgetPeter-totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice-budgetPeter).toFixed(2)} leva more!`);
    }
}
shopping(["920.45", "3", "1", "1"]);