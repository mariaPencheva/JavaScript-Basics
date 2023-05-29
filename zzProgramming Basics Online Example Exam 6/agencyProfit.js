function agencyProfit(input) {
  let companyName = input[0];
  let ticketsPcsForAdults = Number(input[1]); //prodadeni za wyzrastni
  let ticketsPcsForKids = Number(input[2]); //prodadeni za deca
  let priceTicketAdult = Number(input[3]);
  let taxPrice = Number(input[4]);

  let priceTicketKid = priceTicketAdult - priceTicketAdult * 0.7;
  let finalPriceForAdult = priceTicketAdult + taxPrice;
  let finalPriceForKid = priceTicketKid + taxPrice;
  let totalPriceTickets = finalPriceForAdult * ticketsPcsForAdults + finalPriceForKid * ticketsPcsForKids;

  let profit = totalPriceTickets * 0.2;

  console.log(`The profit of your agency from ${companyName} tickets is ${profit.toFixed(2)} lv.`);
}

agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"]);
