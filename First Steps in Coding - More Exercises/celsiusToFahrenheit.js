function celsiusToFahrenheit(input) {
    let celsius = Number(input[0]);
    let fahrenheit = celsius * 9 / 5 + 32;

    console.log((fahrenheit).toFixed(2));
}

celsiusToFahrenheit([25]);