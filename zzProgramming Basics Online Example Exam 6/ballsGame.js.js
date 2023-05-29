function balls(input) {
    let ballsNum = Number(input[0]);

    let totalPoints = 0;

    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let otherBalls = 0;

    
    for(let i = 1; i <= ballsNum; i++){
        let currBall = input[i];

        if(currBall === "red"){
            redBalls++;
            totalPoints += 5;
        } else if(currBall === "orange"){
            orangeBalls++;
            totalPoints += 10;
        } else if(currBall === "yellow"){
            yellowBalls++;
            totalPoints += 15;
        } else if(currBall === "white"){
            whiteBalls++;
            totalPoints += 20;
        } else if(currBall === "black"){
            blackBalls++;
            totalPoints = Math.floor(totalPoints / 2);
        } else {
            otherBalls++;
        }

    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);

}

balls([
    "3",
    "white",
    "black",
    "pink"
])