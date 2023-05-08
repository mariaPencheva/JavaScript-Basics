//  function transportPrice(input) {
//      let nKm = Number(input[0]);
//      let word = input[1];

//      let busPrice = 0.09 * nKm;
//      let trainPrice = 0.06 * nKm;
//      let taxiDayPrice = (0.79 * nKm) + 0.70;
//      let taxiNightPrice = (0.90 * nKm) + 0.70;


//      if (nKm >= 20 && busPrice < trainPrice) {
//          console.log(busPrice.toFixed(2));
//      } else if (nKm >= 100 && trainPrice < busPrice) {
//          console.log(trainPrice.toFixed(2));
//      } else {
//             if (nKm < 20 && word === `day`) {
//          console.log(taxiDayPrice.toFixed(2));
//     }   else if (nKm < 20 && word === `night`) {
//          console.log(taxiNightPrice.toFixed(2));
//      }
//  }
// }

//  transportPrice(["25", "day"]);

function transportPrice(input) {
    let nKm = Number(input[0]);
    let word = input[1];

    let busPrice = 0.09 * nKm;
    let trainPrice = 0.06 * nKm;
    let taxiDayPrice = (0.79 * nKm) + 0.70;
    let taxiNightPrice = (0.90 * nKm) + 0.70;

    if (nKm >= 100) {
        console.log(trainPrice.toFixed(2));
    } else if (nKm >= 20) {
        console.log(busPrice.toFixed(2));
    } else {
        if (word === `day`) {
            console.log(taxiDayPrice.toFixed(2));
        } else if (word === `night`) {
            console.log(taxiNightPrice.toFixed(2));
        }
    }
}

transportPrice(["25", "day"]);

