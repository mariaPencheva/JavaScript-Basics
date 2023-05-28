function poolDay(input) {
    let people = Number(input[0]); //broi hora
    let tax = Number(input[1]); //za whod
    let sunbedPricePc = Number(input[2]);
    let umbrellaPricePc = Number(input[3]);

    let taxesForEveryPerson = people * tax; //lv za vhod
    let priceForUmbrellas = (Math.ceil(people / 2) * umbrellaPricePc);
    let priceForSunbeds = (Math.ceil(people * 0.75) * sunbedPricePc);

    let total = taxesForEveryPerson + priceForUmbrellas + priceForSunbeds;
    console.log(`${(total.toFixed(2))} lv.`)
}

poolDay(["100", "8", "6", "4"]);