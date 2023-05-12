function flowers(input) {
    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3]; //[Spring, Summer, Аutumn, Winter]
    let dayOff = input[4]; //[Y – да / N - не]

    let pricePerChrysanthemum = 0;
    let pricePerRose = 0;
    let priceTulip = 0; 
    let totalPriceForFlowers = 0;
    let flowers = 0;
    let arranged = 2;   

    switch (season) {
        case "Spring":
        case "Summer":
            pricePerChrysanthemum = 2.00;
            pricePerRose = 4.10;
            priceTulip = 2.50;
            break;
        case "Autumn":
        case "Winter":
            pricePerChrysanthemum = 3.75;
            pricePerRose = 4.50;
            priceTulip = 4.15;
    }

    totalPriceForFlowers = (chrysanthemums * pricePerChrysanthemum) + (roses * pricePerRose) + (tulips * priceTulip);
    

    if(season === "Spring" && tulips >= 7){
        totalPriceForFlowers = totalPriceForFlowers - totalPriceForFlowers * 0.05;
    } else if (season === "Winter" && roses >= 10) {
        totalPriceForFlowers = totalPriceForFlowers - totalPriceForFlowers * 0.1
    }

    flowers = roses + tulips + chrysanthemums;

    if (flowers >= 20) {
        totalPriceForFlowers = totalPriceForFlowers - totalPriceForFlowers * 0.2;
    }
    
    switch (dayOff) {
        case "Y": //praznichen den 
        totalPriceForFlowers = totalPriceForFlowers + (totalPriceForFlowers * 0.15);        
            break;
        case "N": //raboten den 
            
            break;
    }
console.log((totalPriceForFlowers + 2).toFixed(2));
}

flowers(["2", "4", "8", "Spring", "Y"]);