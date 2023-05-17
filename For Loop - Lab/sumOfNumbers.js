function forLoop(input) {
  let text = input[0];
  let inputL = text.length;
  let sum = 0;

  for (let index = 0; index < inputL; index++) {
    let currentNumber = Number(text[index]);
    sum += currentNumber;
  }

  console.log(`The sum of the digits is:${sum}`);
}

forLoop(["1234"]);