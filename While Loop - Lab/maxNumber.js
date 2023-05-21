function maxNumber(input) {
    let index = 0;
    let currElement = input[index];

    let maxNumber = Number.MIN_SAFE_INTEGER;
    //let 

    while(currElement !== "Stop"){
        let currEllementAsNumber = Number(currElement);

        if (currEllementAsNumber > maxNumber){
            maxNumber = currEllementAsNumber;
        }
        index++
        currElement = input[index];
    }
    console.log(maxNumber);
}

maxNumber(["-1",
"-2",
"Stop"])

