function easterCompetition(input) {
    let index = 0;
    let easterBreads = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let points = 0
    let currPoints = 0;
    
    let bestChef = '';
    let bestScore = 0;

    for(let i = 1; i <= easterBreads; i++){
        points = 0
        let nameChef = command;
        
        command = input[index];
        index++;

        while(command !== "Stop"){
            currPoints = Number(command);
            points += currPoints

            command = input[index];
            index++
            
        }

        console.log(`${nameChef} has ${points} points.`);

        if (points > bestScore) {
            bestScore = points;
            bestChef = nameChef;
            console.log(`${nameChef} is the new number 1!`);
        }

        command = input[index];
        index++;
    }

    console.log(`${bestChef} won competition with ${bestScore} points!`);
}


easterCompetition([
    "3",

    "Chef Manchev",
    "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"
])