// 1.	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100] 10
// 2.	Необходимо количество боя (в литри) - цяло число в интервала [1…100] 11
// 3.	Количество разредител (в литри) - цяло число в интервала [1…30] 4
// 4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9] 8

// •	Предпазен найлон - 1.50 лв. за кв. метър
// •	Боя - 14.50 лв. за литър
// •	Разредител за боя - 5.00 лв. за литър

// За всеки случай, към необходимите материали, Румен иска да добави още 10% от количеството боя
// и 2 кв.м. найлон, разбира се и 0.40 лв. за торбички.
// Сумата, която се заплаща на майсторите за 1 час работа, е равна на 30% от сбора на всички разходи за
// материали.

function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let workersHours = Number(input[3]);    

    let nylonSum = (nylon + 2) * 1.50;
    let paintSum = (paint + (paint * 0.10)) * 14.50;
    let paintThinnerSum = paintThinner * 5.00;

    let totalMaterialsSum = nylonSum + paintSum + paintThinnerSum + 0.40;

    let workersSumPerHour = totalMaterialsSum * 0.30;

    let totalSum = totalMaterialsSum + workersSumPerHour * workersHours;

    console.log(totalSum);
} 
repainting(["10","11","4","8"]);