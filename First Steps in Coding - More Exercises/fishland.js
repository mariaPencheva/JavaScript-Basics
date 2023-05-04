// •	Първи ред – цена на скумрията на килограм. Реално число в интервала [0.00…40.00]
// •	Втори ред – цена на цацата на килограм. Реално число в интервала [0.00…30.00]
// •	Трети ред – килограма паламуд. Реално число в интервала [0.00…50.00]
// •	Четвърти ред – килограма сафрид. Реално число в интервала [0.00… 70.00]
// •	Пети ред – килограма миди. Цяло число в интервала [0 ... 100]

// •	Паламуд – 60% по-скъп от скумрията
// •	Сафрид – 80% по-скъп от цацата
// •	Миди – 7.50 лв. за килограм

function fishland(input) {
    let priceSkumriya = Number(input[0]); //6.90
    let priceCaca = Number(input[1]);
    let kgPalamud = Number(input[2]); //1.5
    let kgSafrid = Number(input[3]);
    let kgMidi = Number(input[4]);

    let pricePalamudPerKg = priceSkumriya + (priceSkumriya * 0.60);
    let pricePalamud = pricePalamudPerKg * kgPalamud; 
    let priceSafridPerKg = (priceCaca * 0.80) + priceCaca;
    let priceSafrid = kgSafrid * priceSafridPerKg;
    let priceMidi = kgMidi * 7.50;

    let totalPrice = pricePalamud + priceSafrid + priceMidi;

    console.log((totalPrice).toFixed(2));
    //console.log(pricePalamud);

} 

fishland(["6.90","4.20","1.5","2.5","1"]);