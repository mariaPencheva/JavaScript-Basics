function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let place = "";
    let kindOfVacation = "";

    switch (season) {
        case "summer":
            if (budget <= 100){
                price = 0.3 * budget;
                place = "Bulgaria";
                kindOfVacation = "Camp";
            } else if (budget <= 1000) {
                price = 0.4 * budget;
                place = "Balkans";
                kindOfVacation = "Camp";
            } else {
                price = 0.9 * budget;
                place = "Europe";
                kindOfVacation = "Hotel";
            }
            
            break;

        case "winter":
            if (budget <= 100){
                price = 0.7 * budget;
                place = "Bulgaria";
                kindOfVacation = "Hotel";
            } else if (budget <= 1000) {
                price = 0.8 * budget;
                place = "Balkans";
                kindOfVacation = "Hotel";
            } else {
                price = 0.9 * budget;
                place = "Europe";
                kindOfVacation = "Hotel";
            }
            
            break;
    }
console.log(`Somewhere in ${place} `);
console.log(`${kindOfVacation} - ${price.toFixed(2)}`);
}


journey(["1500", "summer"])