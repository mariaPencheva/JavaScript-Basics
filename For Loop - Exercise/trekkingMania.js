function trekkingMania(input) {
    let groups = Number(input[0]);

    let people = 0;

    let mussala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < groups + 1; i++) {
        let peopleInGroup = Number(input[i]);

        if (peopleInGroup <= 5) {
            mussala += peopleInGroup;
        } else if (peopleInGroup >= 6 && peopleInGroup <= 12) {
            monblan += peopleInGroup;
        } else if (peopleInGroup >= 13 && peopleInGroup <= 25) {
            kilimandjaro += peopleInGroup;
        } else if (peopleInGroup >= 26 && peopleInGroup <= 40) {
            k2 += peopleInGroup;
        } else {
            everest += peopleInGroup;
        }
        people = mussala + monblan + kilimandjaro + k2 + everest;
    }

    let pM = (mussala / people) * 100;
    let pMo = (monblan / people) * 100;
    let pKi = (kilimandjaro / people) * 100;
    let pK = (k2 / people) * 100;
    let pE = (everest / people) * 100;
    
    console.log(`${pM.toFixed(2)}%`);
    console.log(`${pMo.toFixed(2)}%`);
    console.log(`${pKi.toFixed(2)}%`);
    console.log(`${pK.toFixed(2)}%`);
    console.log(`${pE.toFixed(2)}%`);

}

trekkingMania([
    "10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"
]);
