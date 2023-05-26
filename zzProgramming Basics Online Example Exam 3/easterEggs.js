function easterEggs(input) {
    let paintedEggs = Number(input[0]);

    let countRed = 0;
    let countOrange = 0;
    let countBlue = 0;
    let countGreen = 0;

    let max = 0;
    let col = ``;

    for(let i = 1; i <= paintedEggs; i++){
        let color = input[i];
        
        if (color === "red"){
            countRed ++;
        } else if (color === "orange"){
            countOrange ++;
        } else if (color === "blue"){
            countBlue ++;
        } else if (color === "green"){
            countGreen ++;
        } 
        
        if (countRed > countOrange && countRed > countBlue && countRed > countGreen){
            max = countRed;
            col = `red`;
        } else if (countGreen > countRed && countGreen > countOrange && countGreen > countBlue){
            max = countGreen;
            col = `green`;
        } else if (countOrange > countRed && countOrange > countBlue && countOrange > countGreen){
            max = countOrange;
            col = `orange`;
        } else if (countBlue > countRed && countBlue > countOrange && countBlue > countGreen){
            max = countBlue;
            col = `blue`;
        }

    }

    
    console.log(`Red eggs: ${countRed}`);
    console.log(`Orange eggs: ${countOrange}`);
    console.log(`Blue eggs: ${countBlue}`);
    console.log(`Green eggs: ${countGreen}`);
    console.log(`Max eggs: ${max} -> ${col}`);
    

}

easterEggs([
    "4",
    "blue",
    "red",
    "blue",
    "orange",

]);