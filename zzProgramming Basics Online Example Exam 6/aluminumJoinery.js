function aluminumJoinery(input) {
    let pcs = Number(input[0]);
    let size = input[1];
    let delivery = input[2];

    let priceEach = 0;
    let totalPrice = 0;
 
    switch(size){
        case "90X130":
            priceEach = 110;
            totalPrice = priceEach * pcs;

            if(pcs > 30 && pcs <= 60){
                totalPrice -= totalPrice * 0.05;
            } else if (pcs > 60){
                totalPrice -= totalPrice * 0.08;
            }
            
            if(delivery === "With delivery"){
                totalPrice += 60;
            } 

        break;

        case "100X150":
            priceEach = 140;
            totalPrice = priceEach * pcs;

            if(pcs > 40 && pcs <= 80){
                totalPrice -= totalPrice * 0.06;
            } else if (pcs > 80){
                totalPrice -= totalPrice * 0.1;
            } 

            if(delivery === "With delivery"){
                totalPrice += 60;
            } 

        break;
        
        case "130X180":
            priceEach = 190;
            totalPrice = priceEach * pcs;

            if(pcs > 20 && pcs <= 50){
                totalPrice -= totalPrice * 0.07;
            } else if (pcs > 50){
                totalPrice -= totalPrice * 0.12;
            } 

            if(delivery === "With delivery"){
                totalPrice += 60;
            } 

        break;
        
        case "200X300":
            priceEach = 250; 
            totalPrice = priceEach * pcs;

            if(pcs > 25 && pcs <= 50){
                totalPrice -= totalPrice * 0.09;
            } else if (pcs > 50){
                totalPrice -= totalPrice * 0.14;
            } 

            if(delivery === "With delivery"){
                totalPrice += 60;
            } 

        break;
    }

    if(pcs > 99){
        totalPrice -= totalPrice * 0.04;
    }


    if(pcs < 10){
        console.log(`Invalid order`);
    } else {
        console.log(`${totalPrice.toFixed(2)} BGN`);

    }

}

aluminumJoinery([
    "2",
    "130X180",
    "With delivery"
])
