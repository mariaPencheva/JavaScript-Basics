function gameNumberWars(input) {
    let index = 0;
    let playerOne = input[index];
    index++;
    let playerTwo = input[index];
    index++;

    let totalOne = 0;
    let totalTwo = 0;
    let command = input[index];

    while (command !== "End of game") {
        let currentCardOne = Number(input[index]);
        index++;
        let currentCardTwo = Number(input[index]);

        if (currentCardOne > currentCardTwo) {
            totalOne += currentCardOne - currentCardTwo;

        } else if (currentCardOne < currentCardTwo) {
            totalTwo += currentCardTwo - currentCardOne;
        }

        else if (currentCardOne === currentCardTwo) {
            console.log("Number wars!");

            index++;
            currentCardOne = Number(input[index]);
            index++;
            currentCardTwo = Number(input[index]);

            if (currentCardOne > currentCardTwo) {
                console.log(playerOne + " is winner with " + (totalOne) + " points");
            } else {
                console.log(playerTwo + " is winner with " + (totalTwo) + " points");
            }
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "End of game") {
        console.log(playerOne + " has " + (totalOne) + " points");
        console.log(playerTwo + " has " + (totalTwo) + " points");
    }
}
gameNumberWars([
    "Elena",
    "Simeon",
    
    "6",
    "3",

    "2",
    "5",

    "8",
    "9",

    "End of game"
]);

