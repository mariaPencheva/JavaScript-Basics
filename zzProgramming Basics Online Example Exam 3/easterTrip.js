function easterTrip(input){
    let country = input[0];
    let dates = input[1];
    let nights = Number(input[2]);

    let pricePerNight = 0;
    let total = 0;
    
    switch (country) {
        case "France":
            if(dates === "21-23"){
            pricePerNight = 30;
            } else if(dates === "24-27"){
            pricePerNight = 35;
            } else if(dates === "28-31"){
            pricePerNight = 40;
            }
            break;

        case "Italy":
            if(dates === "21-23"){
            pricePerNight = 28;
            } else if(dates === "24-27"){
            pricePerNight = 32;
            } else if(dates === "28-31"){
            pricePerNight = 39;
            }
            break;

        case "Germany":
            if(dates === "21-23"){
            pricePerNight = 32;
            } else if(dates === "24-27"){
            pricePerNight = 37;
            } else if(dates === "28-31"){
            pricePerNight = 43;
            }
            break;
    }

    total = pricePerNight * nights;
    console.log(`Easter trip to ${country} : ${total.toFixed(2)} leva.`);

}

easterTrip(["Germany", "24-27", "5"]);