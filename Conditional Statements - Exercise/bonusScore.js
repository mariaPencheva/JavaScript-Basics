
function bonusScore(index) {
    let initialPoints = Number(index[0]);
    let bonusPoints = 0;

    if (initialPoints <= 100) {
        bonusPoints = 5;
    } else if (initialPoints <= 1000) {
        bonusPoints = 0.20 * initialPoints;
    }

    else {
        bonusPoints = 0.10 * initialPoints;
    }

    if (initialPoints % 2 === 0) {
        bonusPoints = bonusPoints + 1;
    } else if (initialPoints % 10 === 5) {
        bonusPoints = bonusPoints + 2;
    }

    console.log(bonusPoints);
    console.log(initialPoints + bonusPoints);

}

bonusScore(["15875"]);