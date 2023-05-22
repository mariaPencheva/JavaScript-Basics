function reportSystem(input) {
    let sum = Number(input[0]);
    let command = input;
    let index = 1;

    let total = 0;

    let totalWithCard = 0;
    let totalWithCash = 0;

    let cashCount = 0;
    let cardCount = 0;

    while (index < input.length) {
        if (command === "End") {
            console.log("Failed to collect required money for charity.");
            break;
        }

        let currentProduct = Number(input[index]);

        if (index % 2 === 0) { 
            if (currentProduct < 10) {
                console.log("Error in transaction!");
            } else {
                totalWithCard += currentProduct;
                cardCount++;
                total += currentProduct;
                console.log("Product sold!");
            }


        } else {
            if (currentProduct > 100) {
                console.log("Error in transaction!");
            } else {
                totalWithCash += currentProduct;
                cashCount++;
                total += currentProduct;
                console.log("Product sold!");
            }
        }

        if (total >= sum) {
            let avgCS = totalWithCash / cashCount;
            let avgCC = totalWithCard / cardCount;
            console.log("Average CS: " + avgCS.toFixed(2));
            console.log("Average CC: " + avgCC.toFixed(2));
            break;
        }
        index++;
        command = input[index];
        
    }

}

reportSystem([
    "500", 

    "120", 
    "8",   

    "63",  
    "256", 

    "78",  
    "317"  

])