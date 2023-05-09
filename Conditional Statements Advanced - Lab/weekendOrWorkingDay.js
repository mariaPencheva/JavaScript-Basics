function weekendOrWorkingDay(input) {
    // let day = String(input[0]);
    let day = input[0];

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":      
        case "Thursday":          
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
            default: 
            console.log("Error");
            break;
    }
}
weekendOrWorkingDay(["Sunday"]);


//("Monday"); break;
//("Tuesday"); break;
//("Wednesday"); break;
//("Thursday"); break;
//("Friday"); break;
//("Saturday"); break;
//("Sunday"); break;
//("Error")