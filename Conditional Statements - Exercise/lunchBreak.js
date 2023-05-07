function lunchBreak(input) {
    let seriesName = input[0];
    let episodeMins = Number(input[1]);
    let breakForLunch = Number(input[2]);

    let lunchTime = (1/8) * breakForLunch;
    let relaxTime = (1/4) * breakForLunch;
    
    let totalTakenTime = lunchTime + relaxTime;
    let leftTime = breakForLunch - totalTakenTime;

    if (leftTime >= episodeMins) {
        let timeAfterMovie = leftTime - episodeMins;
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeAfterMovie)} minutes free time.`)
    } else {
        let timeNeeded = episodeMins - leftTime;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }
}

lunchBreak(["Teen Wolf", "48", "60"]);