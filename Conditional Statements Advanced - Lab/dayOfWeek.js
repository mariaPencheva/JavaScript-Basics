function dayOfWeek(input) {
    let day = Number(input[0]);

    switch (day) {
        case 1: console.log("Monday"); break; //day === 1;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        case 7: console.log("Sunday"); break;
        default: console.log("Error"); break;
    }    
// switch case проверява с тези директни стойности, които съм му задала след думата case!!!!

}

dayOfWeek(["2"]);


    /*   if (day === 1) {
        console.log("Monday");
    } else if (day === 2) {
        console.log("Tuesday");
    } else {
        console.log("Error");
    }
} */ //това е вариант с if - else, в който разписваме за всеки един случай (7 дни от седмицата)