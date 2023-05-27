function movieStars(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;

    let actorName = "";
    let actorPayment = 0;

    while (index < input.length){
        actorName = input[index];

        if(actorName === "ACTION") {
            break;
        }
        
        if(actorName.length > 15){
            budget -= 20/100 * budget;
        } else {
            index++;
            actorPayment = Number(input[index]);
            budget -= actorPayment;
        }
      
        if(budget < 0){
            break;
        }
        
        index++;
    }
    
    if (budget >= 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    } else {
        let deficit = Math.abs(budget);
        console.log(`We need ${deficit.toFixed(2)} leva for our actors.`);
    }
}

// movieStars([90000, 'Christian Bale', 70000.50, 'Leonard DiCaprio', 'Kevin Spacey', 24000.99, 170000, 'Ben Affleck', 40000.50, 'Zahari Baharov', 80000, 'Tom Hanks', 2000.99, 'ACTION']);
movieStars(["170000", "Ben Affleck", "40000.50", "Zahari Baharov", "80000", "Tom Hanks", "2000.99", "ACTION"]);