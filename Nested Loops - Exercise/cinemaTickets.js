function cinemaTickets(input) {
    let index = 0;    
    let command = input[index];
    index++;

    let totalTickets = 0;

    let studentTicketsSum = 0;
    let standartTicketsSum = 0;
    let kidTicketsSum = 0;

    while(command !== "Finish"){
        let movieName = command;
        let seats = Number(input[index]);
        index++;

        let command1 = input[index];
        index++;

        let takenPlaces = 0;

        while(command1 !== "End"){
            let ticketType = command1;
            takenPlaces++;
                  
            switch (ticketType) {
                case "student":
                    studentTicketsSum++;
                    break;
                case "standard":
                    standartTicketsSum++;
                    break;
                case "kid":
                    kidTicketsSum++;
                    break;
                    }

            if (takenPlaces === seats){
                break;
            }

            command1 = input[index];
            index++;
        }

        let percentTaken = (takenPlaces / seats) * 100;
        console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }

    totalTickets = studentTicketsSum + standartTicketsSum + kidTicketsSum;
    console.log(`Total tickets: ${totalTickets}`);

    console.log(`${((studentTicketsSum / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standartTicketsSum / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTicketsSum / totalTickets) * 100).toFixed(2)}% kids tickets.`);

}

cinemaTickets([
    "Taxi",
    "10",

    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",

    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
])
