function movieProfit(input) {
    let movieName = String(input[0]);
    let days = Number(input[1]); //broi dni
    let tickets = Number(input[2]); //pcs

    let pricePerTicket = Number(input[3]);
    let percentForCinema = Number(input[4])/100;

    let totalFromTickets = pricePerTicket * tickets * days;
    let final = totalFromTickets - (totalFromTickets * percentForCinema);
    console.log(`The profit from the movie ${movieName} is ${(final).toFixed(2)} lv.`)
}
movieProfit(["Python Basics", "40", "34785", "10.45", "14"]);