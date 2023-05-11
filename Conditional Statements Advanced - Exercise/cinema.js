function cinema(input) {
    let typeProjection = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let seats = rows * cols;
    let totalPrice = 0;

    if (typeProjection === "Premiere") {
        totalPrice = seats * 12;
    } else if (typeProjection === "Normal") {
        totalPrice = seats * 7.5;
    } else {
        totalPrice = seats * 5;
    }
    
    console.log(`${totalPrice.toFixed(2)} leva`);
}
cinema(["Discount", "12", "30"]);