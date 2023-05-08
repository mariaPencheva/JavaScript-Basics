function harvest(input) {
    let area = Number(input[0]);                            // plosht kw m loze  X
    let grapesPerSquare = Number(input[1]);                 // grozde za kw m    Y
    let wineNeededLiters = Number(input[2]);                // nujni litri vino  Z za prodan 
    let workers = Number(input[3]);                         // broi rabotnici

    let totalGrapesKg = grapesPerSquare * area;             // obshto grozde - rekoltata
    let totalWineLiters = (0.4 * totalGrapesKg) / 2.5;

    if (totalWineLiters >= wineNeededLiters) {
        let litersLeft = Math.ceil(totalWineLiters - wineNeededLiters);    // litrite koito ostawat w poweche 
        let litersPerWorker = litersLeft / workers;                         //gi razdelqme na rabotnicite
        console.log(`Good harvest this year! Total wine: ${Math.ceil(totalWineLiters)} liters.`);
        console.log(`${litersLeft} liters left -> ${Math.ceil(litersPerWorker)} liters per person.`);
    } else {
        let litersNeeded = Math.floor(wineNeededLiters - totalWineLiters);
        console.log(`It will be a tough winter! More ${Math.floor(litersNeeded)} liters wine needed.`);
    }
}

harvest(["1020", "1.5", "425", "4"]);