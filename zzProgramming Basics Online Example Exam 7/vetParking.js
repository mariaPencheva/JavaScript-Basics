function vetParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);

    

    //let thisDayCharge = 0;
    
    let totalCharge = 0; 

    for (let day = 1; day <= days; day++){
        let hourCharge = 0;
        let dayCharge = 0;
        
        for (let hour = 1; hour <= hours; hour++){
            if (day % 2 === 0 && hour % 2 !== 0){
                hourCharge = 2.5;
            } else if (day % 2 !== 0 && hour % 2 === 0){
                hourCharge = 1.25;
            } else {
                hourCharge = 1;
            }

            totalCharge += hourCharge; 
            dayCharge += hourCharge;
            
        }
        
        
        console.log(`Day: ${day} - ${dayCharge.toFixed(2)} leva`)

    }

    console.log(`Total: ${totalCharge.toFixed(2)} leva`);

}

vetParking([
    "2", //dni
    "5"  //chasove
])