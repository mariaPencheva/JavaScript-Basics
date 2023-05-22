function dishwasher(input) {
    let bottlesWithdetergent = Number(input[0]);
    let index = 1;

    let detergentOwned = bottlesWithdetergent * 750;

    let detergentNeeded = 0;
    let plates = 0;
    let pots = 0;
    let counter = 1;

    while (true) {
        let command = input[index];
        index++;

        if (command === "End") {
            break;
        }

        if (counter % 3 === 0) {
            detergentNeeded += command * 15; //for pots
            pots += Number(command);
        } else {
            detergentNeeded += command * 5; //for plates
            plates += Number(command);
        }

        if (detergentNeeded > detergentOwned) {
            break;
        }

        counter++;
    }


    if (detergentNeeded <= detergentOwned) {
        let moreDett = detergentOwned - detergentNeeded;
        console.log(`Detergent was enough!`);
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${Math.abs(moreDett)} ml.`);
    } else {
        let leftOverDet = detergentNeeded - detergentOwned;
        console.log(`Not enough detergent, ${Math.abs(leftOverDet)} ml. more necessary!`);
    }

}

dishwasher([
    "2",
    "53",
    "65",
    "55",
    "End"
])