function moving(input){
    let index = 0;

    let width = Number(input[index]);
    index++;

    let length = Number(input[index]); //1vi index
    index++;

    let height = Number(input[index]); //index[2]
    index++; //index[3]

    let boxes = input[index];
    index++;

    let volume = width * length * height;
    let totalSumOfBoxes = 0;

    while(boxes !== "Done"){
        boxes = Number(boxes);
        totalSumOfBoxes += boxes;

        if(totalSumOfBoxes > volume || boxes === "Done"){
            break;
        }

        boxes = input[index];
        index++;

    }

    if(boxes === "Done" || volume > totalSumOfBoxes){
        let freeVolume = volume - totalSumOfBoxes;
        console.log(`${freeVolume} Cubic meters left.`);
    } else if (volume < totalSumOfBoxes){
        let neededVolume = totalSumOfBoxes - volume;
        console.log(`No more free space! You need ${neededVolume} Cubic meters more.`);
    }


}
moving(["10", 
"1",
"2",

"4", 
"6",
"Done"])
