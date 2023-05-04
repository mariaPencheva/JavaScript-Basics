function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let wallsFrontBack = 2 * (x * x) - 1.2 * 2;
    let wallsSide = 2 * (x * y) - 2 * (1.5 * 1.5);
    let greenColor = (wallsFrontBack + wallsSide) / 3.4;

    let roofRect = 2 * (x * y);
    let roofTriangular = 2 * (x * h / 2);
    let redColor = (roofRect + roofTriangular) / 4.3;

    console.log((greenColor).toFixed(2));
    console.log((redColor).toFixed(2));
}

housePainting(["10.25","15.45","8.88"]);
