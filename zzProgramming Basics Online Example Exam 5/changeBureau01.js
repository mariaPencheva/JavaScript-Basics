function changeBureau(input) {
    let btcPcs = Number(input[0]);
    let uanaPcs = Number(input[1]);
    let comission = Number(input[2]) / 100; // zashtoto po uslovie pishe che e procent

    let btcInLeva = 1168;
    let uanaInDollar = 0.15;
    let dollarInLeva = 1.76;
    let euroInLeva = 1.95;

    let totalBtcInLeva = btcInLeva * btcPcs;
    let totalUanaInDollar = uanaInDollar * uanaPcs;
    let totalUanaInLeva = totalUanaInDollar * dollarInLeva;

    let totalBtcInEuro = totalBtcInLeva / euroInLeva;
    let totalUanaInEuro = totalUanaInLeva / euroInLeva;

    let total = totalBtcInEuro + totalUanaInEuro;
    let final = total - total*comission;

    console.log(final.toFixed(2));
}
changeBureau(["7", "50200.12", "3"]);