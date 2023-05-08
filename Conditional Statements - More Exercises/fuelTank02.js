function fuelTank(input) {
  let fuel = input[0];
  let liters = Number(input[1]);
  let yesNoCard = input[2];

  let gasoline = 2.22; //per liter
  let gas = 0.93;
  let diesel = 2.33;

  let discountGasolineYesCard = gasoline - 0.18; //with card!
  let discountGasYesCard = gas - 0.08; //0.85 st
  let discountDieselYesCard = diesel - 0.12;

  let finalPrice = 0;
  let totalPrice = 0;

  if (fuel === "Gas" && liters >= 20 && liters <= 25) {
    if (yesNoCard === "Yes") {
      finalPrice = liters * discountGasYesCard;
      totalPrice = finalPrice - finalPrice * 0.08;
    } else if (yesNoCard === "No") {
      finalPrice = liters * gas;
      totalPrice = finalPrice - finalPrice * 0.08;
    }
  }

  if (fuel === "Gas" && liters > 25) {
    if (yesNoCard === "Yes") {
      finalPrice = liters * discountGasYesCard;
      totalPrice = finalPrice - finalPrice * 0.1;
    } else if (yesNoCard === "No") {
      finalPrice = liters * gas;
      totalPrice = finalPrice - finalPrice * 0.1;
    }
  }

  if (fuel === "Gas" && liters < 20) {
    if (yesNoCard === "Yes") {
      finalPrice = liters * discountGasYesCard;
      totalPrice = finalPrice;
    } else if (yesNoCard === "No") {
      finalPrice = liters * gas;
      totalPrice = finalPrice;
    }
  }

  if (fuel === "Gasoline" && liters >= 20 && liters <= 25) {
    if (yesNoCard === "Yes") {
      finalPrice = liters * discountGasolineYesCard;
      totalPrice = finalPrice - finalPrice * 0.08;
    } else if (yesNoCard === "No") {
      finalPrice = liters * gasoline;
      totalPrice = finalPrice - finalPrice * 0.08;
    }
  }

  if (fuel === "Gasoline" && liters > 25) {
    if (yesNoCard === "Yes") {
      finalPrice = liters * discountGasolineYesCard;
      totalPrice = finalPrice - finalPrice * 0.1;
    } else if (yesNoCard === "No") {
      finalPrice = liters * gasoline;
      totalPrice = finalPrice - finalPrice * 0.1;
    }
  }

  if (fuel === "Gasoline" && liters < 20) {
    if (yesNoCard === "Yes") {
      finalPrice = liters * discountGasolineYesCard;
      totalPrice = finalPrice;
    } else if (yesNoCard === "No") {
      finalPrice = liters * gasoline;
      totalPrice = finalPrice;
    }
  }

  if (fuel === "Diesel" && liters >= 20 && liters <= 25) {
    if (yesNoCard === "Yes") {
      finalPrice = liters * discountDieselYesCard;
      totalPrice = finalPrice - finalPrice * 0.08;
    } else if (yesNoCard === "No") {
      finalPrice = liters * diesel;
      totalPrice = finalPrice - finalPrice * 0.08;
    }
  }

  if (fuel === "Diesel" && liters > 25) {
    if (yesNoCard === "Yes") {
      finalPrice = liters * discountDieselYesCard;
      totalPrice = finalPrice - finalPrice * 0.1;
    } else if (yesNoCard === "No") {
      finalPrice = liters * diesel;
      totalPrice = finalPrice - finalPrice * 0.1;
    }
  }

  if (fuel === "Diesel" && liters < 20) {
    if (yesNoCard === "Yes") {
      finalPrice = liters * discountDieselYesCard;
      totalPrice = finalPrice;
    } else if (yesNoCard === "No") {
      finalPrice = liters * diesel;
      totalPrice = finalPrice;
    }
  }

  console.log(`${totalPrice.toFixed(2)} lv.`);
}
fuelTank(["Diesel", "19", "No"]);
