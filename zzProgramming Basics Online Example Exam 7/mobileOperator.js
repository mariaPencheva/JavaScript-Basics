function mobileOperator(input) {
    let term = input[0];
    let type = input[1];
    let internet = input[2];
    let months = Number(input[3]);

    let pricePerMonth = 0;
    let totalPrice = 0;

    switch (term) {
        case "one":
            if(type === "Small"){
                pricePerMonth = 9.98;
            } else if (type === "Middle"){
                pricePerMonth = 18.99;
            } else if (type === "Large"){
                pricePerMonth = 25.98;
            } else if (type === "ExtraLarge"){
                pricePerMonth = 35.99;
            }
            break;

        case "two":
            if(type === "Small"){
                pricePerMonth = 8.58;
            } else if (type === "Middle"){
                pricePerMonth = 17.09;
            } else if (type === "Large"){
                pricePerMonth = 23.59;
            } else if (type === "ExtraLarge"){
                pricePerMonth = 31.79;
            }

            
            break;
            
    }

    if(internet === "yes"){
        if(pricePerMonth <= 10){
            pricePerMonth += 5.5;
        } else if (pricePerMonth > 10 && pricePerMonth <= 30){
            pricePerMonth += 4.35;
        } else {
            pricePerMonth += 3.85;
        }
    } else if (internet === "no"){
        pricePerMonth;
    }

    totalPrice = pricePerMonth * months;

    if(term === "two"){
        totalPrice = totalPrice - (totalPrice * 0.0375);
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);
}

mobileOperator([
    "two",
    "Small",
    "yes",
    "20"
])