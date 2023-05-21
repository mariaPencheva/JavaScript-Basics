function minNumber(input) {
    let index = 0;
    let currElement = input[index];

    let minNumber = Number.MAX_SAFE_INTEGER;

    while(currElement !== "Stop"){
        let currElementAsNumber = Number(currElement);

        if(currElementAsNumber < minNumber){
        minNumber = currElementAsNumber;
        }

        index++;
        currElement = input[index];
    }

    console.log(minNumber);
}
minNumber(["-10",
"20",
"-30",
"Stop"])
