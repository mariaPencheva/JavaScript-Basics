function oscarsWeekInCinema(input) {
    let movie = input[0];
    let hall = input[1];
    let tickets = Number(input[2]);

    let pricePerTicket = 0;
    let income = 0;
    let name = "";

    switch (movie) {
        case "A Star Is Born":
            name = "A Star Is Born";
            if (hall === "normal"){
                pricePerTicket = 7.50;
            } else if (hall === "luxury"){
                pricePerTicket = 10.50;
            } else if (hall === "ultra luxury"){
                pricePerTicket = 13.50;
            }
            break;

        case "Bohemian Rhapsody":
            name = "Bohemian Rhapsody";
            if (hall === "normal"){
                pricePerTicket = 7.35;
            } else if (hall === "luxury"){
                pricePerTicket = 9.45;
            } else if (hall === "ultra luxury"){
                pricePerTicket = 12.75;
            }
            break;

        case "Green Book":
            name = "Green Book";
            if (hall === "normal"){
                pricePerTicket = 8.15;
            } else if (hall === "luxury"){
                pricePerTicket = 10.25;
            } else if (hall === "ultra luxury"){
                pricePerTicket = 13.25;
            }
            break;

        case "The Favourite":
            name = "The Favourite";
            if (hall === "normal"){
                pricePerTicket = 8.75;
            } else if (hall === "luxury"){
                pricePerTicket = 11.55;
            } else if (hall === "ultra luxury"){
                pricePerTicket = 13.95;
            }
            break;
    }

    income = pricePerTicket * tickets;
    console.log(`${name} -> ${income.toFixed(2)} lv.`);

}

oscarsWeekInCinema([
    "A Star Is Born",
    "luxury",
    "42"

])