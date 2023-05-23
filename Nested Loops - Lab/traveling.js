function traveling(input){
    let index = 0;
    let row = input[index];
        
    while(row !== "End"){
        let destination = row;
        index++;
        let budget = Number(input[index]);
        let sum = 0;

        while(sum < budget){
            index++;
            let currentSum = Number(input[index]);
            sum += currentSum; 
        }
        console.log(`Going to ${destination}!`);
        index++;
        row = input[index];
    }

}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"]);
