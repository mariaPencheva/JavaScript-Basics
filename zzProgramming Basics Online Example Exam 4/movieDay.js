function movieDay(input) {
    let index = 0;
    let timeToShoot = Number(input[index]);
    index++;

    let scenes = Number(input[index]);
    index++;

    let timePerScene = Number(input[index]);

    let preparationTime = 0.15 * timeToShoot;
    let totalTime = (scenes * timePerScene) + preparationTime;

    if(totalTime <= timeToShoot){
        let timeLeft = timeToShoot - totalTime;
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeLeft)} minutes left!`);
    } else {
        let timeNeeded = totalTime - timeToShoot;
        console.log(`Time is up! To complete the movie you need ${timeNeeded} minutes.`);
    }

}

movieDay([
    "120",
    "10",
    "11"
])