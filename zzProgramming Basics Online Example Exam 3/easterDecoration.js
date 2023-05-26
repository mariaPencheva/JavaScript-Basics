function easterDecoration(input) {
    let index = 0;
    let clientsNum = Number(input[index]);
    index++;
    let command = input[index];

    let counter = 0;
    let price = 0;
    let totalPrice = 0;

    let priceClientsTotal = 0;
    
    for (let i = 1; i <= clientsNum; i++){
        counter = 0;
        totalPrice = 0;

        while(command !== "Finish"){
            counter ++;

            switch (command) {
                case "basket":
                    price = 1.50;
                    break;

                case "wreath":
                    price = 3.8;
                    break;

                case "chocolate bunny":
                    price = 7;
                    break;
                            
            }
            totalPrice += price;
            index++
            command = input[index];
            
        }

        if (counter % 2 === 0){
            totalPrice *= 0.8;
        }

        console.log(`You purchased ${counter} items for ${totalPrice.toFixed(2)} leva.`);
        
        priceClientsTotal += totalPrice;

        index++
        command = input[index];

    }
    
    let avgPerClient = priceClientsTotal / clientsNum;
    console.log(`Average bill per client is: ${avgPerClient.toFixed(2)} leva.`)
    
}

easterDecoration([
    "2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"
])