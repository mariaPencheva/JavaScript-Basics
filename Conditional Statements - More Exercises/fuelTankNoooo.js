function fuelTank2(input) {
    let fuel = input[0];
    let liters = Number(input[1]);
    let card = input[2];

    let gasolinePerLiter = 2.22;
    let dieselPerLiter = 2.33;
    let gasPerLiter = 0.93;

    let priceGasoline = (gasolinePerLiter * liters).toFixed(2);
    let priceDiesel = (dieselPerLiter * liters).toFixed(2);
    let priceGas = (gasPerLiter * liters).toFixed(2);

    if (fuel === "Diesel") {
        if (liters >= 20 && liters <= 25 && card === "Yes") {
            let priceDieselWithDiscount = priceDiesel - liters * 0.12;
            let discound = priceDieselWithDiscount * 0.08;
            let totalDiesel = (priceDieselWithDiscount - discound).toFixed(2);
            console.log(`${totalDiesel} lv.`);
         } else if (liters > 25 && card === "Yes") {
                let priceDieselWithDiscount = priceDiesel - liters * 0.12;
                let newDiscountDiesel = priceDieselWithDiscount * 0.1;
                let totalDiesel = (priceDieselWithDiscount - newDiscountDiesel).toFixed(2);
                console.log(`${totalDiesel} lv.`);
            
            } else {
            console.log(`${priceDiesel} lv.`);
            }
    } else if (fuel === "Gasoline") {
        if (liters >= 20 && liters <= 25 && card === "Yes") {
            let priceGasolineWithDiscount = priceGasoline - liters * 0.18;
            let discound = priceGasolineWithDiscount * 0.08;
            let totalGasoline = (priceGasolineWithDiscount - discound).toFixed(2);
            console.log(`${totalGasoline} lv.`);
        } else if (liters > 25 && card === "Yes") {
                let priceGasolineWithDiscount = priceGasoline - liters * 0.18;
                let newDiscountGasoline = priceGasolineWithDiscount * 0.1;
                let totalGasoline = (priceGasolineWithDiscount - newDiscountGasoline).toFixed(2);
                console.log(`${totalGasoline} lv.`);
            
            } else {
            console.log(`${priceGasoline} lv.`);
            }
    } else if (fuel === "Gas") {
        if (liters >= 20 && liters <= 25 && card === "Yes") {
            let priceGasWithDiscount = priceGas - liters * 0.08;
            let discound = priceGasWithDiscount * 0.08;
            let totalGas = (priceGasWithDiscount - discound).toFixed(2);
            console.log(`${totalGas} lv.`);
        } else if (liters > 25 && card === "Yes") {
                let priceGasWithDiscount = priceGas - liters * 0.08;
                let newDiscountGas = priceGasWithDiscount * 0.1;
                let totalGas = (priceGasWithDiscount - newDiscountGas).toFixed(2);
                console.log(`${totalGas} lv.`);
            
            } else {
            console.log(`${priceGas} lv.`);
            }
    }
}
fuelTank2(["Gasoline", "25", "No"]);

