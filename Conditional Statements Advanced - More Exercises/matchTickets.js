function matchTickets(input) {
  let budget = Number(input[0]);
  let category = input[1];
  let people = Number(input[2]);

  let priceTicketsPerPerson = 0;
  let priceTransport = 0;

  let totalSum = 0;


  switch (category) {
    case "Normal":
        priceTicketsPerPerson = 249.99;
        if (people <= 4){
            priceTransport = 0.75 * budget;
        } else if (people > 4 && people <= 9) {
            priceTransport = 0.6 * budget;
        } else if (people > 9 && people <= 24) {
            priceTransport = 0.5 * budget;
        } else if (people > 24 && people <= 49) {
            priceTransport = 0.4 * budget;
        } else {
            priceTransport = 0.25 * budget;
        }
        totalSum = (priceTicketsPerPerson * people) + priceTransport;
        break;
  
    case "VIP":
        priceTicketsPerPerson = 499.99;
        if (people <= 4){
            priceTransport = 0.75 * budget;
        } else if (people > 4 && people <= 9) {
            priceTransport = 0.6 * budget;
        } else if (people > 9 && people <= 24) {
            priceTransport = 0.5 * budget;
        } else if (people > 24 && people <= 49) {
            priceTransport = 0.4 * budget;
        } else {
            priceTransport = 0.25 * budget;
        }
        totalSum = (priceTicketsPerPerson * people) + priceTransport;
        break;
  }

  if (totalSum <= budget) {
    let moneyLeft = (Math.abs(totalSum - budget)).toFixed(2);
    console.log(`Yes! You have ${moneyLeft} leva left.`); 
  } else {
    let moneyNeeded = (Math.abs(budget - totalSum).toFixed(2));
    console.log(`Not enough money! You need ${moneyNeeded} leva.`);
  }

}

matchTickets(["50000", "Normal", "200"]);
