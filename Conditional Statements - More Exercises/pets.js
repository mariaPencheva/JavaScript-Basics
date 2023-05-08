function pets(input) {
    let days = Number(input[0]);
    let foodLeftKg = Number(input[1]);
    let dogFoodPerDayKg = Number(input[2]);
    let catFoodPerDayKg = Number(input[3]);
    let turtleFoodPerDayGr = Number(input[4]);

    let totalFoodKg = (dogFoodPerDayKg + catFoodPerDayKg + (turtleFoodPerDayGr / 1000)) * days;

    if (totalFoodKg <= foodLeftKg) {
        let foodLeft = Math.floor(foodLeftKg - totalFoodKg);
        console.log(`${foodLeft} kilos of food left.`);
    } else {
        let foodMore = Math.ceil(totalFoodKg - foodLeftKg);
        console.log(`${foodMore} more kilos of food are needed.`)
    }

}
pets(["5", "10", "2.1", "0.8", "321"]);