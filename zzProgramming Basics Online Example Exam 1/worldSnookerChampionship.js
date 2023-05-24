function worldSnookerChampionship(input) {
    let stage = input[0];
    let typeTicket = input[1];
    let tickets = Number(input[2]);
    let photoWithTrophee = input[3]; // 'Y' - (да) || 'N' - (не)

    let pricePerTicket = 0;
    let totalPriceForTickets = 0;
    let priceForPhoto = 40;
    let priceAtTheEnd = 0;
    
    switch (stage) {
        case "Quarter final":
            if (typeTicket === "Standard"){
                pricePerTicket = 55.50;
            } else if (typeTicket === "Premium"){
                pricePerTicket = 105.20;
            } else if (typeTicket === "VIP"){
                pricePerTicket = 118.90;
            }
            break;

        case "Semi final":
            if (typeTicket === "Standard"){
                pricePerTicket = 75.88;
            } else if (typeTicket === "Premium"){
                pricePerTicket = 125.22;
            } else if (typeTicket === "VIP"){
                pricePerTicket = 300.40;
            }
            break;

        case "Final":
            if (typeTicket === "Standard"){
                pricePerTicket = 110.10;
            } else if (typeTicket === "Premium"){
                pricePerTicket = 160.66;
            } else if (typeTicket === "VIP"){
                pricePerTicket = 400;
            }
            break;
    
    }

    totalPriceForTickets = pricePerTicket * tickets;

    
    if (totalPriceForTickets > 2500 && totalPriceForTickets <= 4000) { 
        totalPriceForTickets *= 0.9;            
    } else if (totalPriceForTickets > 4000) {
        totalPriceForTickets *= 0.75;
    } else {
        totalPriceForTickets;
    }
    
    
    if(photoWithTrophee === "N"){
        priceForPhoto = 0;
    } else if (photoWithTrophee === "Y") {
        priceForPhoto = priceForPhoto * tickets
    } else if (photoWithTrophee === "Y" && totalPriceForTickets > 4000) {
        priceForPhoto = 0;
    }

    priceAtTheEnd = totalPriceForTickets + priceForPhoto;
    console.log(priceAtTheEnd.toFixed(2));

} 

worldSnookerChampionship(["Semi final", "VIP", "9", "Y"]);