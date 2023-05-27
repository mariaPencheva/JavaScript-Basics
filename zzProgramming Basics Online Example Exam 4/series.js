function series(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;

    let numOfSeries = Number(input[index]);
    index++;

    let nameSeries = "";
    let priceSeries = 0;
    let total = 0;

    for(let i = 1; i <= numOfSeries; i++){
        nameSeries = input[index];
        index++;
        priceSeries = Number(input[index]);
        // index++;

        if(nameSeries === "Thrones"){
            priceSeries *= 0.5;
        } else if (nameSeries === "Lucifer"){
            priceSeries *= 0.6;
        } else if (nameSeries === "Protector"){
            priceSeries *= 0.7;
        } else if (nameSeries === "TotalDrama"){
            priceSeries *= 0.8;
        } else if (nameSeries === "Area"){
            priceSeries *= 0.9;
        } 

        index++;
        total += priceSeries;

    }
    let diff = Math.abs(budget - total);

    if(budget >= total){
        console.log(`You bought all the series and left with ${diff.toFixed(2)} lv.`);
    } else if (budget < total){
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
    }

}

series([
    "10",
    "3",
    "Thrones",
    "5",
    "Riverdale",
    "5",
    "Gotham",
    "2"
])