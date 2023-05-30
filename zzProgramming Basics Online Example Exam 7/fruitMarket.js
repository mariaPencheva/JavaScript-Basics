function fruit(strawberryPrice, bananas, orange, raspberry, strawberry) {
    strawberryPrice = Number(strawberryPrice);
    bananas = Number(bananas);
    orange = Number(orange);
    raspberry = Number(raspberry);
    strawberry = Number(strawberry);

    let raspberrysPrice = strawberryPrice / 2;
    let bananasPrice = raspberrysPrice - (raspberrysPrice * 0.8);
    let orangePrice = raspberrysPrice - (raspberrysPrice * 0.4);
    let sum = (strawberryPrice * strawberry) + (bananasPrice * bananas) + (orangePrice * orange) + (raspberrysPrice * raspberry);

    console.log(sum.toFixed(2));
}

fruit("48", "10", "3.3", "6.5", "1.7");
