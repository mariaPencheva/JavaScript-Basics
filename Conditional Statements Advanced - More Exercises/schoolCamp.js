function schoolCamp(input) {
    let season = input[0];
    let typeGroup = input[1];
    let students = Number(input[2]);
    let nights = Number(input[3]);

    let pricePerNight = 0;
    let discount = 0;
    let totalPrice = 0;

    let sport = ``;

    switch (season) {
        case "Winter":
            if(typeGroup === `boys`) {
                sport = `Judo`;
                pricePerNight = 9.60;
            } else if (typeGroup === `girls`) {
                sport = `Gymnastics`;
                pricePerNight = 9.60;
            } else {
                sport = `Ski`;
                pricePerNight = 10;
            }
            break;
    
        case "Spring":
            if(typeGroup === `boys`){
                sport = `Tennis`;
                pricePerNight = 7.20;
            } else if(typeGroup === `girls`){
                sport = `Athletics`;
                pricePerNight = 7.20;
            } else {
                sport = `Cycling`;
                pricePerNight = 9.5;
            }
            break;
    
        case "Summer":
            if(typeGroup === `boys`){
                sport = `Football`;
                pricePerNight = 15;
            } else if(typeGroup === `girls`){
                sport = `Volleyball`;
                pricePerNight = 15;
            } else {
                sport = `Swimming`;
                pricePerNight = 20; 
            }
            break;
    } 

    totalPrice = pricePerNight * nights * students;

    if (students >= 10 && students < 20){
        discount = 0.05 * totalPrice;
        totalPrice = totalPrice - discount;
    } else if (students >= 20 && students < 50){
        discount = 0.15 * totalPrice;
        totalPrice = totalPrice - discount;
    } else if (students >= 50){
        discount = 0.5 * totalPrice;
        totalPrice = totalPrice - discount;
        }
   
     console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);

}


schoolCamp(["Winter", "mixed", "9", "15"]);

// if (season === "Winter") {
//     if(typeGroup === `boys`) {
//         sport = `Judo`;
//         pricePerNight = 9.60;
//     } else if (typeGroup === `girls`) {
//         sport = `Gymnastics`;
//         pricePerNight = 9.60;
//     } else {
//         sport = `Ski`;
//         pricePerNight = 10;
//     }
// }

// else if (season === "Spring") {
//     if(typeGroup === `boys`){
//         sport = `Tennis`;
//         pricePerNight = 7.20;
//     } else if(typeGroup === `girls`){
//         sport = `Athletics`;
//         pricePerNight = 7.20;
//     } else {
//         sport = `Cycling`;
//         pricePerNight = 9.5;
//     }
// }

// else if (season === "Summer") {
//     if(typeGroup === `boys`){
//         sport = `Football`;
//         pricePerNight = 15;
//     } else if(typeGroup === `girls`){
//         sport = `Volleyball`;
//         pricePerNight = 15;
//     } else {
//         sport = `Swimming`;
//         pricePerNight = 20; 
//     }
// } 