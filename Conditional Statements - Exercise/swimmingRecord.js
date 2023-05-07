// function swimmingRecord(input) {
//     let WrecordInSec = Number(input[0]);
//     let distanceInMeters = Number(input[1]);
//     let timeInSecPerMeter = Number(input[2]);

//     let timeIvanSec = distanceInMeters * timeInSecPerMeter;
//     let timeIvanDelaySec = Math.floor(distanceInMeters/15) * 12.5;
//     let totalTimeAtTheEnd = timeIvanSec + timeIvanDelaySec;

//     //totalTimeAtTheEnd = Math.floor;

//     if(WrecordInSec <= totalTimeAtTheEnd) {
//         let timeNeeded = Math.floor(totalTimeAtTheEnd - WrecordInSec);
//         console.log(`Yes, he succeeded! The new world record is ${timeNeeded.toFixed(2)} seconds.`);
//         //timeNeeded = Math.floor;
//         //console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`)
//     } else {
//         console.log(`No, he failed! He was ${totalTimeAtTheEnd.toFixed(2)} seconds slower.`);
//     }
// }

function worldSwimmRec(input) {
 
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSeconds = Number(input[2]);
 
    let distancedNeeded = distanceInMeters * timeInSeconds;
    let every15Km = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = distancedNeeded + every15Km;
 
    if (recordInSeconds <= totalTime) {
        console.log(`No, he failed! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }
}
worldSwimmRec(["55555.67",
"3017",
"5.03"]);
