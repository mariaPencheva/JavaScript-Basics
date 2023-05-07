function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let clothesPricePerPerson = Number(input[2]);

    let decor = 0.10 * budget;
    let totalPriceClothes = people * clothesPricePerPerson; 

    if (people > 150) {
        totalPriceClothes = totalPriceClothes * 0.90;
    }

    let total = totalPriceClothes + decor;

    if (total > budget) {
        let moneyNeeded = total - budget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = budget - total;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);

    }

}

godzillaVsKong(["15437.62", "186", "57.99"]);