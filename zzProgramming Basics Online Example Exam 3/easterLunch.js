// Бабата на Деси всяка година приготвя обяд за семейството си за Великден.
// Напишете програма, която изчислява какви разходи ще има по приготвянето на обяда,
// като знаете колко броя козунаци, кори с яйца и килограма курабии е купила. Цените на продуктите са следните:
// • Козунак – 3.20 лв.
// • Яйца – 4.35 лв. за кора с 12 яйца
// • Курабии – 5.40 лв. за килограм
// • Боя за яйца - 0.15 лв. за яйце

// От конзолата се четат 3 реда:
// • Брой козунаци - цяло число в интервала [0 … 99]
// • Брой кори с яйца - цяло число в интервала [0 … 99]
// • Килограми курабии - цяло число в интервала [0 … 99]

// Да се отпечата на конзолата колко ще са разходите по приготвянето на обяда. Сумата да бъде форматирана до втория знак след десетичната запетая.

function easterLunch(input) {
    let easterBreadPcs = Number(input[0]);
    let eggsPcs = Number(input[1]);
    let kgCookies = Number(input[2]);

    let pricePerBread = 3.2;
    let pricePerEgg = 4.35;
    let priceCookiesPerKg = 5.4;
    let PricePaintForEggs = 0.15 * eggsPcs * 12;

    let total = (pricePerBread * easterBreadPcs) + (pricePerEgg * eggsPcs) + (priceCookiesPerKg * kgCookies) + PricePaintForEggs;
    console.log(total.toFixed(2));

}
easterLunch(["2", "3", "2"]);