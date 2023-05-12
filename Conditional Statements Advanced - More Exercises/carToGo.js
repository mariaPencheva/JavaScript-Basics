// Сезоните са лято и зима – "Summer" и "Winter".

// Типа коли са кабрио и джип – "Cabrio" и "Jeep". 

// •	При бюджет по-малък или равен от 100лв.:
    // o	Класът ще е - "Economy class"
    // o	Според сезона колата и цената ще са:
        // 	Лято – Кабрио – 35% от бюджета
        // 	Зима – Джип – 65% от бюджета





// •	При бюджет по-голям от 100лв. и по-малък или равен от 500лв.:
    // o	Класът ще е - "Compact class"
    // o	Според сезона колата и цената ще са:
        // 	Лято – Кабрио – 45% от бюджета
        // 	Зима – Джип – 80% от бюджета

// •	При бюджет по-голям от 500лв.:
    // o	Класът ще е – "Luxury class"
        // o	За всеки сезон колата ще е джип и цената ще е:
        // 	90% от бюджета


function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let carClass = ``;
    let car = ``;
    let pricePerCar = 0;

    switch (season) {
        case "Summer":
            if (budget <= 100){
                carClass = `Economy class`;
                car = `Cabrio`;
                pricePerCar = 0.35 * budget; //pogledni
            } else if (budget > 100 && budget <= 500) {
                carClass = `Compact class`;
                car = `Cabrio`;
                pricePerCar = 0.45 * budget;
            } else {
                carClass = `Luxury class`;
                car = `Jeep`;
                pricePerCar = 0.9 * budget;
            }
            break;
        case "Winter":
            if (budget <= 100){
                carClass = `Economy class`;
                car = `Jeep`;
                pricePerCar = 0.65 * budget;
            } else if (budget > 100 && budget <= 500) {
                carClass = `Compact class`;
                car = `Jeep`;
                pricePerCar = 0.8 * budget;
            }else {
                carClass = `Luxury class`;
                car = `Jeep`;
                pricePerCar = 0.9 * budget;
            }
            break;
        
    }
    console.log(`${carClass}`);
    console.log(`${car} - ${pricePerCar.toFixed(2)}`);
}
carToGo(["99.99", "Summer"])