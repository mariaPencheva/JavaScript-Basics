function flowerShop(input) {
    let magnolia = Number(input[0]);
    let zumbuli = Number(input[1]);
    let roses = Number(input[2]);
    let cactus = Number(input[3]);
    let giftPrice = Number(input[4]);

    let priceMagnolia = magnolia * 3.25;
    let priceZumbuli = zumbuli * 4;
    let priceRoses = roses * 3.50;
    let priceCactus = cactus * 8;

    let total = priceMagnolia + priceZumbuli + priceRoses + priceCactus;
    let taxPrice = 0.05 * total;
    let moneyAfterTaxes = total - taxPrice;

    if (moneyAfterTaxes >= giftPrice) {
        let moneyLeft = Math.floor(moneyAfterTaxes - giftPrice);
        console.log(`She is left with ${moneyLeft} leva.`);
    } else {
        let moneyNeeded = Math.ceil(giftPrice - moneyAfterTaxes);
        console.log(`She will have to borrow ${moneyNeeded} leva.`);
    }

}
flowerShop(["2", "3", "5", "1", "50"])