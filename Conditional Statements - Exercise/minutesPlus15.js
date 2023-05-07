function minutesPlus15(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let minPlus15 = minutes + 15;
        
    if (minPlus15 >= 60) {
        hour = hour + 1;
        minPlus15 = minPlus15 - 60;
    } 
    if (hour === 24) {
        hour = 0;
    }

    if (minPlus15 < 10) {
        console.log(`${hour}:0${minPlus15}`);
    } else {
        console.log(`${hour}:${minPlus15}`);
    }

}
minutesPlus15(["1", "46"]);