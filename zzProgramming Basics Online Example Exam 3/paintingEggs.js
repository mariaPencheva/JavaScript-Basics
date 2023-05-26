function paintingEggs(input) {
    let sizeEgg = input[0];
    let colorEgg = input[1];
    let pcs = Number(input[2]);

    let pricePerPcs = 0;
    let totalSum = 0;
    let taxes = 0;

    switch (colorEgg) {
        case "Red":
            if (sizeEgg === "Large"){
                pricePerPcs = 16;
            } else if (sizeEgg === "Medium"){
                pricePerPcs = 13;
            } else if (sizeEgg === "Small"){
                pricePerPcs = 9;
            }
            break;

        case "Green":
            if (sizeEgg === "Large"){
                pricePerPcs = 12;
            } else if (sizeEgg === "Medium"){
                pricePerPcs = 9;
            } else if (sizeEgg === "Small"){
                pricePerPcs = 8;
            }
            break;

        case "Yellow":
            if (sizeEgg === "Large"){
                pricePerPcs = 9;
            } else if (sizeEgg === "Medium"){
                pricePerPcs = 7;
            } else if (sizeEgg === "Small"){
                pricePerPcs = 5;
            }
            break;
    
    }

    totalSum = pricePerPcs * pcs;
    taxes = 0.35 * totalSum;
    let sumAfterTaxes = totalSum - taxes;

    console.log(`${sumAfterTaxes.toFixed(2)} leva.`);

}

paintingEggs(["Large", "Red", "7"]);