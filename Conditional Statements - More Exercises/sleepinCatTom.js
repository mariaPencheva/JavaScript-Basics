function sleepinCatTom(input) {
    let dayOff = Number(input[0]);     // pochiwni dni
    let playOnDayOff = dayOff * 127;   // tolkowa minuti igra w pochiwni dni
    let workDays = 365 - dayOff;       // rabotni dni
    let playOnWorkDay = workDays * 63; // tolkowa minuti igra w rabotni dni

    let normalPlayPerYear = 30000;     // minuti za godina w igra

    let playingTimePerYear = playOnWorkDay + playOnDayOff;

    if (normalPlayPerYear > playingTimePerYear) {
        let difference = normalPlayPerYear - playingTimePerYear;
        let H = Math.floor(difference / 60);  // chasove
        let M = difference - (H * 60);        // minuti
        console.log(`Tom sleeps well`);
        console.log(`${H} hours and ${M} minutes less for play`)
    } else {
        let minsMore = playingTimePerYear - normalPlayPerYear;
        let H1 = Math.floor(minsMore / 60);
        let M1 = minsMore - (H1 * 60);
        console.log(`Tom will run away`);
        console.log(`${H1} hours and ${M1} minutes more for play`)
    }

}
sleepinCatTom(["113"]);