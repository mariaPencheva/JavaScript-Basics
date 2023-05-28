function exercise02(input){
    let minutesInParkPerDay = Number(input[0]);
    let outsideTimesPerDay = Number(input[1]);
    let eatenCaloriesPerDay = Number(input[2]);

    let caloriesBurnedPerMin = 5;
    let neededBurnCalories = 0.5 * eatenCaloriesPerDay;

    let totalBurnedCalories = (outsideTimesPerDay * minutesInParkPerDay) * caloriesBurnedPerMin;

    if(totalBurnedCalories >= neededBurnCalories){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedCalories}.`);
    }

}

exercise02(["30", "3", "600"]);