function speedInfo(input) {
    let a = Number(input[0]);

    if (a <= 10){
        console.log("slow");
    }
    if (a > 10 && a <= 50){
        console.log("average");
    }
    if (a > 50 && a <= 150){
        console.log("fast");
    }
    if (a > 150 && a <= 1000){
        console.log("ultra fast");
    }
    if (a > 1000){
        console.log("extremely fast");
    }
}
speedInfo(["3500"]);