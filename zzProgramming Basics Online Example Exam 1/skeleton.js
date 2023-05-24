function skeleton(input) {
    let minsContr = Number(input[0]);
    let secContr = Number(input[1]);
    let length = Number(input[2]);
    let secFor100meters = Number(input[3]);

    let totalSecContr = minsContr * 60 + secContr; // obshto sek

    let timeDecreaseSec = (length / 120) * 2.5;   // vremeto namalqva s tolkova sek
    let marinsTimeInSec = (length / 100) * secFor100meters - timeDecreaseSec;

    if (marinsTimeInSec <= totalSecContr) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${marinsTimeInSec.toFixed(3)}.`);
    } else {
        let secNeeded = marinsTimeInSec - totalSecContr;
        console.log(`No, Marin failed! He was ${secNeeded.toFixed(3)} second slower.`);
    }

}

skeleton(["1", "20", "1546", "12"]);