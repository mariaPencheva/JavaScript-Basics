function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let place = ``;
    let city = `;`
    let price = 0;

   switch (season) {
    case `Summer`:
        city = `Alaska`;
        if(budget <= 1000){
            place = `Camp`;
            price = 0.65 * budget;
        } else if (budget > 1000 && budget <= 3000){
            place = `Hut`;
            price = 0.8 * budget;
        } else {
            place = `Hotel`;
            price = 0.9 * budget;
        }
        break;
    case `Winter`:
        city = `Morocco`;
        if(budget <= 1000){
            place = `Camp`;
            price = 0.45 * budget;
        } else if (budget > 1000 && budget <= 3000){
            place = `Hut`;
            price = 0.6 * budget;
        } else {
            place = `Hotel`;
            price = 0.9 * budget;
        }
        break;
   }
   console.log(`${city} - ${place} - ${price.toFixed(2)}`);
}
vacation(["1100", "Summer"]); 