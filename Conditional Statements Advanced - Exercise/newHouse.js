function newHouse(input) {
    let flowerType = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let totalPrice = 0;

    switch (flowerType) {
        case "Roses":
            totalPrice = numberOfFlowers * 5;
            break;
        case "Dahlias":
            totalPrice = numberOfFlowers * 3.8;
            break;
        case "Tulips":
            totalPrice = numberOfFlowers * 2.8;
            break;  
        case "Narcissus":
            totalPrice = numberOfFlowers * 3;
            break; 
        case "Gladiolus":
            totalPrice = numberOfFlowers * 2.5;
            break; 

    }

    if (flowerType === "Roses" && numberOfFlowers > 80) {
        totalPrice *= 0.9; //Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена => 100% - 10% = 90% от цената плаща => 90/100 = 0.9
    } else if (flowerType === "Dahlias" && numberOfFlowers > 90) {
        totalPrice *= 0.85;
    } else if (flowerType === "Tulips" && numberOfFlowers > 80) {
        totalPrice *= 0.85;
    } else if (flowerType === "Narcissus" && numberOfFlowers < 120) {
        totalPrice *= 1.15; // Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%=>не са 100%, а стават 100=15=>115/100=1.15 дробно ч.
    } else if (flowerType === "Gladiolus" && numberOfFlowers < 80) {
        totalPrice *= 1.2;
    }

    if (budget >= totalPrice) { // И = !!!!!!
        moneyLeft = budget - totalPrice;
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    } else if (budget < totalPrice) {
        moneyNeeded = totalPrice - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }  
}


newHouse(["Tulips",
"88",
"260"]);
