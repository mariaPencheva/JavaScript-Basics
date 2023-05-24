function basketballEquipment(input) {
    let taxForYear = Number(input[0]);
    //let totalSum = 0;

    let shoesPrice = 0.6 * taxForYear;
    let equipPrice = 0.8 * shoesPrice;
    let ballPrice = equipPrice / 4;
    let accessoriesPrice = ballPrice / 5;
    let totalSum = taxForYear + shoesPrice + equipPrice + ballPrice + accessoriesPrice

    console.log(totalSum.toFixed(2));

}

basketballEquipment(["320"]);