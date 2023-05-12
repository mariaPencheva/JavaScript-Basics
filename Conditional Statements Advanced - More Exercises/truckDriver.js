function truckDriver(input) {
    let season = input[0];
    let kmPerMonth = Number(input[1]);

    let salary = 0;
    //let taxes = 0;

    switch (season) {
        case "Spring":
        case "Autumn":
            if(kmPerMonth <= 5000){
                salary = kmPerMonth * 0.75;
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                salary = kmPerMonth * 0.95;
            } else {
                salary = kmPerMonth * 1.45;
            }
            break;
        case "Summer":
            if(kmPerMonth <= 5000){
                salary = kmPerMonth * 0.90;
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                salary = kmPerMonth * 1.10 ;
            } else {
                salary = kmPerMonth * 1.45;
            }
            break;
        case "Winter":
            if(kmPerMonth <= 5000){
                salary = kmPerMonth * 1.05;
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                salary = kmPerMonth * 1.25 ;
            } else {
                salary = kmPerMonth * 1.45;
            }
            break;
    }
     
    salary = salary * 4;
    let total = salary - (0.1 * salary);
    console.log(total.toFixed(2));
}
truckDriver(["Summer", "3455"]);