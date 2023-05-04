function weatherForecast01(input){
    let text = String(input[0]);

    if (text === "sunny") {
        console.log("It's warm outside!");
    } else {
        console.log("It's cold outside!");
    }

}

weatherForecast01(['sunny']);