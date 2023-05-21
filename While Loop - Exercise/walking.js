function walking(input) {
    let goal = 10000;
    let totalSteps = 0;

    let index = 0;
    let currSteps = input[index];
    index++

    while (currSteps !== "Going home") {
        currSteps = Number(currSteps);
        totalSteps += currSteps;

        if (totalSteps >= goal){
            break;
        }

        currSteps = input[index];
        index++
    }


    if(currSteps === "Going home"){
        let stepsToHome = Number(input[index]);
        totalSteps += stepsToHome;
    }

    if (totalSteps >= goal){
        let moreWalks = totalSteps - goal;
        console.log(`Goal reached! Good job!`);
        console.log(`${moreWalks} steps over the goal!`);
    } else {
        let neededWalks = goal - totalSteps;
        console.log(`${neededWalks} more steps to reach goal.`);
    }

}

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])




