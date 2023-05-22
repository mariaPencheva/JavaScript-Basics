function numsDividedBy3WithoutReminder() {
  let firstNum = 1;
  let lastNum = 100;

  //version with while loop
  // while (num <= 100) {
  //     if (num % 3 === 0) {
  //         console.log(num);
  //     }
  //     num++;
  // }

  //version with for loop
  for (let i = firstNum; i <= lastNum; i++) {
    let num = i;
    if (num % 3 === 0) {
      console.log(num);
    }
  }
}

numsDividedBy3WithoutReminder();
