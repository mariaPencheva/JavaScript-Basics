function multiplicationTable(input) {
  let num = Number(input[0]);
  let sum = 0;

  for (let n = 1; n <= 10; n++) {
    sum = num * n;
    console.log(`${n} * ${num} = ${sum}`);
  }
}

multiplicationTable(["6"]);
