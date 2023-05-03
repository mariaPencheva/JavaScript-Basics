// •	Пакет химикали - 5.80 лв. 
// •	Пакет маркери - 7.20 лв. 
// •	Препарат - 1.20 лв (за литър)

//konzolata chete:
// •	Брой пакети химикали - цяло число в интервала [0...100]
// •	Брой пакети маркери - цяло число в интервала [0...100]
// •	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// •	Процент намаление - цяло число в интервала [0...100]

// izhod:
// Да се отпечата на конзолата колко пари ще са нужни на Ани, за да си плати сметката

function suppliesForSchool(input) {
       let pens = Number(input[0]);
       let markers = Number(input[1]);
       let cleanerInLiters = Number(input[2]);
       let discountPercent = Number(input[3]);

       let discountPercentDecimal = discountPercent / 100;

       let totalPrice = pens * 5.80 + markers * 7.20 + cleanerInLiters * 1.20;
       let priceWithDiscount = totalPrice - (totalPrice * discountPercentDecimal);

       console.log(priceWithDiscount);
}

suppliesForSchool(["2","3","4","25"]);