function filmPremiere(input) {
    let index = 0;
    let movieName = input[index];
    index++;

    let menuPack = input[index];
    index++;

    let tickets = Number(input[index]);
    let pricePerPc = 0;

    switch (movieName) {

        case "John Wick":
            if(menuPack === "Drink"){
                pricePerPc = 12;
            } else if (menuPack === "Popcorn"){
                pricePerPc = 15;
            } else if (menuPack === "Menu"){
                pricePerPc = 19;
            }
            break;

        case "Star Wars":
            if(menuPack === "Drink"){
                pricePerPc = 18;
            } else if (menuPack === "Popcorn"){
                pricePerPc = 25;
            } else if (menuPack === "Menu"){
                pricePerPc = 30;
            }
            break;

        case "Jumanji":
            if(menuPack === "Drink"){
                pricePerPc = 9;
            } else if (menuPack === "Popcorn"){
                pricePerPc = 11;
            } else if (menuPack === "Menu"){
                pricePerPc = 14;
            }
            break;

    
    }

    let totalPrice = pricePerPc * tickets;

    if (movieName === "Star Wars" && tickets >= 4){
        totalPrice *= 0.7; 
    } else if (movieName === "Jumanji" && tickets === 2){
        totalPrice *= 0.85;
    }

console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);

}

filmPremiere([
    "Star Wars",
    "Popcorn",
    "4"
])