function easterBake(input) {
    let easterBreads = Number(input[0]);

    let sugar = 0;
    let flour = 0;

    let sugarNeeded = 0;
    let flourNeeded = 0;

    let maxFlour = 0;
    let maxSugar = 0;

    for (let i = 1; i < easterBreads * 2 ; i = i + 2) {
        let sugarQtty = Number(input[i]);
        let flourQtty = Number(input[i + 1]);

        sugar += sugarQtty;
        flour += flourQtty;   
        
        if (sugarQtty > maxSugar) {
            maxSugar = sugarQtty;
        }
 
        if (flourQtty > maxFlour) {
            maxFlour = flourQtty;
        }


    }

    sugarNeeded = Math.ceil(sugar / 950.0);
    flourNeeded = Math.ceil(flour / 750.0);

    console.log(`Sugar: ${sugarNeeded}`);
    console.log(`Flour: ${flourNeeded}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}

easterBake([
    "3",
    "400",
    "350",
    "250",
    "300",
    "450",
    "380"
]);