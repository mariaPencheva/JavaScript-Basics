function darts(input) {
  let index = 0;
  let name = input[index];
  index++;

  let score = 301;
  let successfulShots = 0;
  let unsuccessfulShots = 0;

  let command = input[index];

  while (command !== "Retire") {
    let sector = input[index];
    index++;
    let points = Number(input[index]);
    index++;

    switch (sector) {
      case "Single":
        //points = points;
        score -= points;
        if (score >= 0) {
          successfulShots++;
        } else {
          unsuccessfulShots++;
          score += points;
        }
        break;
      case "Double":
        //points *= 2;
        score -= points * 2;
        if (score >= 0) {
          successfulShots++;
        } else {
          unsuccessfulShots++;
          score += points * 2;
        }
        break;
      case "Triple":
        //points *= 3;
        score -= points * 3;
        if (score >= 0) {
          successfulShots++;
        } else {
          unsuccessfulShots++;
          score += points * 3;
        }
        break;
    }

    if (score === 0) {
      console.log(`${name} won the leg with ${successfulShots} shots.`);
      break;
    }

    command = input[index];
  }

  if (command === "Retire") {
    console.log(
      `${name} retired after ${unsuccessfulShots} unsuccessful shots.`
    );
  }
}

darts([
  "Michael van Gerwen",

  "Triple",
  "20",
  "Triple",
  "19",
  "Double",
  "10",
  "Single",
  "3",
  "Single",
  "1",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "20",
]);
