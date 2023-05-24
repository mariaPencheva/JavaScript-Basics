function fitnessCenter(input){
    let people = Number(input[0]);
    
    let backCount = 0; //hora trenirali deinostta ili kupili produkt
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let shakeCount = 0;
    let barCount = 0;

    let trainingPeople = 0;
    let buyersPeople = 0;

    let percentTrai = 0;
    let percentBuy = 0;

    for(let i = 1; i <= people; i ++){
        let activity = input[i];

        // if (activity === "Back") {
        //         backCount++;
        //         trainingPeople++;
        // } else if (activity === "Chest"){
        //         chestCount++;
        //         trainingPeople++;
        // }else if (activity === "Legs"){
        //         legsCount++;
        //         trainingPeople++;
        // }else if (activity === "Abs"){
        //         absCount++;
        //         trainingPeople++;
        // }else if (activity === "Protein shake"){
        //         shakeCount++;
        //         buyersPeople++;
        // } else if (activity === "Protein bar"){ 
        //         barCount++;
        //         buyersPeople++;
        // }
    

        switch (activity) {
            case "Back":
                backCount++;
                trainingPeople++;
                break;

            case "Chest":
                chestCount++;
                trainingPeople++;
                break;

            case "Legs":
                legsCount++;
                trainingPeople++;
                break;

            case "Abs":
                absCount++;
                trainingPeople++;
                break;

            case "Protein shake":
                shakeCount++;
                buyersPeople++;
                break;

            case "Protein bar":
                barCount++;
                buyersPeople++;
                break;
        }

        percentTrai = (trainingPeople / people) * 100;
        percentBuy = (buyersPeople / people) * 100;

    }

    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${shakeCount} - protein shake`);
    console.log(`${barCount} - protein bar`);
    console.log(`${percentTrai.toFixed(2)}% - work out`);
    console.log(`${percentBuy.toFixed(2)}% - protein`);

}

fitnessCenter([
    "10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs",
])


