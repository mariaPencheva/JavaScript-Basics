function tennisEquipment(input) {
    let pricePerTennisRacket = Number(input[0]);
    let tennisRacketPcs = Number(input[1]);
    let tennisShouesPcs = Number(input[2]);

    let pricePerShouesPcs = 1 / 6 * pricePerTennisRacket;

    let totalPriceForRackets = tennisRacketPcs * pricePerTennisRacket;
    let totalPriceForShoues = pricePerShouesPcs * tennisShouesPcs;

    let moreEquipmentPrice = (totalPriceForRackets + totalPriceForShoues) * 0.20;
    let totalPrice = moreEquipmentPrice + totalPriceForRackets + totalPriceForShoues;

    let djokovichPrice = totalPrice / 8;
    let sponsorsPrice = totalPrice * 7/8;

    console.log(`Price to be paid by Djokovic ${Math.floor(djokovichPrice)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsPrice)}`);

}
tennisEquipment(["386", "7", "4"]);