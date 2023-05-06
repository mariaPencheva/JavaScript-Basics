function areaOfFigures(input) {
    let figure = input[0];

    if (figure === `square`){
        let a = Number(input[1]);
        let areaS = a * a;
        console.log((areaS).toFixed(3));

    } else if (figure === `rectangle`){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let areaR = a * b;
        console.log((areaR).toFixed(3));

    } else if (figure === `circle`){
        let r = Number(input[1]);
        let areaC = Math.PI * r * r
        console.log((areaC).toFixed(3));

    } else if (figure === `triangle`){
        let a = Number(input[1]);
        let h = Number(input[2]);
        let areaT = (a * h) / 2;
        console.log((areaT).toFixed(3));
    }

}
areaOfFigures(["triangle","4.5","20"]);