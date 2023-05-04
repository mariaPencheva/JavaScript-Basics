// •	Първи ред – Цена за килограм зеленчуци – реално число[0.00… 1000.00]
// •	Втори ред – Цена за килограм плодове – реално число[0.00… 1000.00]
// •	Трети ред – Общо килограми на зеленчуците – цяло число[0… 1000]
// •	Четвърти ред – Общо килограми на плодовете – цяло число[0… 1000]
//priceVegetables
//priceFruits


function vegetableMarket(input) {
    let priceVegetables = Number(input[0]);
    let priceFruits = Number(input[1]);
    let kgVegetables = Number(input[2]);
    let kgFruits = Number(input[3]);

    let totalPriceFruitsInLv = priceFruits * kgFruits;
    let totalPriceVegetablesInLv = priceVegetables * kgVegetables;

    //let totalInLv = totalPriceFruitsInLv + totalPriceVegetablesInLv;
    
    let priceInEuro = (totalPriceFruitsInLv + totalPriceVegetablesInLv) / 1.94;
    
    //let priceInLv = kgFruits * priceFruits + kgVegetables * priceVegetables;
    //let priceInEuro = priceInLv / 1.94;

    console.log((priceInEuro).toFixed(2));
}

vegetableMarket(["1.5","2.5","10","10","20.62'"]);