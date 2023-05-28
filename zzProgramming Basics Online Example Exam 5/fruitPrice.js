function exercise03(input){
    let fruit = input[0];
    let size = input[1];
    let pcs = Number(input[2]);

    let pricePerPc = 0;
    let discount = 0;

    switch (fruit) {

        case "Watermelon":

            if(size === "small"){
                pricePerPc = 2 * 56;
            } else if(size === "big"){
                pricePerPc = 5 * 28.7;
            }            
            break;
        case "Mango":

            if(size === "small"){
                pricePerPc = 2 * 36.66;
            } else if(size === "big"){
                pricePerPc = 5 * 19.6;
            }             
            break;
        case "Pineapple":

            if(size === "small"){
                pricePerPc = 2 * 42.1;
            } else if(size === "big"){
                pricePerPc = 5 * 24.8;
            }             
            break;
        case "Raspberry":

            if(size === "small"){
                pricePerPc = 2 * 20;
            } else if(size === "big"){
                pricePerPc = 5 * 15.2;
            } 
            break;
    
    }

    let totalSum = pcs * pricePerPc;

    if(totalSum >= 400 && totalSum <= 1000){
        discount = 0.15 * totalSum;
    } else if (totalSum > 1000){
        discount = 0.5 * totalSum
    }

    let finalSum = totalSum - discount;
    console.log(`${finalSum.toFixed(2)} lv.`);
}

exercise03(["Pineapple", "small", "1"]);