function changeBureau(input) {
    let bitcoinPcs = Number(input[0]);
    let chinaUana = Number(input[1]);
    let commission = Number(input[2]);

    let dollar = 1.76;    //lv
    let euro = 1.95;      //lv
    let btcPrice = 1168 ; //lv
    let uanaPrice = 0.15; //dollar

    let totalBtcLeva = bitcoinPcs * btcPrice; 
    let totalUanaDollar = chinaUana * uanaPrice;  

    let totalBtcEuro = totalBtcLeva / euro;
    let totalUanaLeva = totalUanaDollar * dollar;
    let totalUanaEuro = totalUanaLeva / euro;

    let final = totalBtcEuro + totalUanaEuro;

    let taxes = commission/100 * final;
    let finalMoney = final - taxes;

    console.log(finalMoney.toFixed(2));


}
changeBureau(["1", "5", "5"]);