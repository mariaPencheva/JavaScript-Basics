function easterBakery(input) {
    let flour1KgPrice = Number(input[0]);
    let flourKilos = Number(input[1]);
    let sugarKilos = Number(input[2]);
    let eggsPcs = Number(input[3]);
    let yeastPcs = Number(input[4]);

    //let priceSugarFor1Kg = flour1KgPrice * 0.75; // бързо написано - цената на килограм захар е с 25% по-ниска от тази на килограм брашно
    let priceSugarFor1Kg = flour1KgPrice - (flour1KgPrice * 0.25);
    let priceEggs1Pcs = flour1KgPrice + (flour1KgPrice * 0.10);
    let priceYeastPcs = priceSugarFor1Kg - (priceSugarFor1Kg * 0.8);

    let sumFlour = flour1KgPrice * flourKilos;
    let sumSugar = priceSugarFor1Kg * sugarKilos;
    let sumEggs = priceEggs1Pcs * eggsPcs;
    let sumYeast = priceYeastPcs * yeastPcs;

    let total = sumFlour + sumSugar + sumEggs + sumYeast;

    console.log(total.toFixed(2));
}
easterBakery(["63.44", "3.57", "6.35", "8", "2"]);