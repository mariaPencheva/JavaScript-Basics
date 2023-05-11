// На конзолата трябва да се отпечата един ред:
// •	Цената за престоят му в хотела, форматирана до втория знак след десетичната запетая.


function skiTrip(input) {
    let days = Number(input[0]);
    let type = input[1];
    let mark = input[2];

    let nights = days - 1;
    let totalPrice = 0;
    
    switch(type) {
        case "room for one person":
            totalPrice = 18.00 * nights;
            break;

        case "apartment":
            
            if (days < 10) {
                let discount = (25.00 * nights) * 0.3;
                totalPrice = (25.00 * nights) - discount;
            
            } else if (days >= 10 && days <= 15) {
                let discount = (25.00 * nights) * 0.35;
                totalPrice = (25.00 * nights) - discount;
            } else {
                let discount = (25.00 * nights) * 0.5;
                totalPrice = (25.00 * nights) - discount;
            }
           
            break;

        case "president apartment":
            
        if (days < 10) {
            let discount = (35.00 * nights) * 0.1;
            totalPrice = (35.00 * nights) - discount;
        
        } else if (days >= 10 && days <= 15) {
            let discount = (35.00 * nights) * 0.15;
            totalPrice = (35.00 * nights) - discount;
        } else {
            let discount = (35.00 * nights) * 0.2;
            totalPrice = (35.00 * nights) - discount;
        }

            break; 
    }
     
    if (mark === "positive") {
        totalPrice *= 1.25;
    } else {
        totalPrice *= 0.9;
    }


    console.log(totalPrice.toFixed(2));
}

skiTrip(["2",
"apartment",
"positive"])


