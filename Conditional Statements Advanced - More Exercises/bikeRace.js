function bikeRace(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let type = input[2];

    let priceJun = 0;
    let priceSen = 0;
    let priceCollectedFromJunAndSen = 0;
    let genPeople = juniors + seniors;
    let expenses = 0; //razhodi, koito sa 5% ot sybranata suma
    let donated = 0; //darena suma sled razhodite
    
    switch (type) {
        case "trail":
            priceJun = 5.5;
            priceSen = 7;
            break;
        case "cross-country":
            if (genPeople >= 50){
                priceJun = 8 - (0.25 * 8);
                priceSen = 9.5 - (0.25 * 9.5);
            } else {
                priceJun = 8;
                priceSen = 9.5;
            }
            break;
        case "downhill":
            priceJun = 12.25;
            priceSen = 13.75;
            break;
        case "road":
            priceJun = 20;
            priceSen = 21.50;
            break;
    }

    priceCollectedFromJunAndSen = (priceJun * juniors) + (priceSen * seniors);
    expenses = 0.05 * priceCollectedFromJunAndSen;
    donated = priceCollectedFromJunAndSen - expenses;
    console.log(donated.toFixed(2));
    //console.log((priceSen).toFixed(2));
}

bikeRace(["30", "25", "cross-country"]);