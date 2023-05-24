function gymnastics(input) {
    let country = input[0];
    let instrument = input[1];

    let difficulty = 0;  // трудност
    let performance = 0; // изпълнение

    switch (country) {
        case "Russia":
            if (instrument === "ribbon"){
                difficulty = 9.100;
                performance = 9.400;
            } else if (instrument === "hoop"){
                difficulty = 9.300;
                performance = 9.800;
            } else if (instrument === "rope"){
                difficulty = 9.600;
                performance = 9.000;
            }
            break;
        case "Bulgaria":
            if (instrument === "ribbon"){
                difficulty = 9.600;
                performance = 9.400;
            } else if (instrument === "hoop"){
                difficulty = 9.550;
                performance = 9.750;
            } else if (instrument === "rope"){
                difficulty = 9.500;
                performance = 9.400;
            }
            break;
        case "Italy":
            if (instrument === "ribbon"){
                difficulty = 9.200;
                performance = 9.500;
            } else if (instrument === "hoop"){
                difficulty = 9.450;
                performance = 9.350;
            } else if (instrument === "rope"){
                difficulty = 9.700;
                performance = 9.150;
            }
            break;
    }

    let rating = (difficulty + performance).toFixed(3);
    let leftPoints = 20 - rating;
    let pointsInPercent = (leftPoints/20) * 100;

    console.log(`The team of ${country} get ${rating} on ${instrument}.`);
    console.log(`${pointsInPercent.toFixed(2)}%`);

}

gymnastics(["Bulgaria", "ribbon"]);