function averageNumber(n, ...numbers) {
    if (numbers.length !== n) {
        console.log("Error");
        return;
    }

    let sumOfNumbers = 0;

    for (let i = 0; i < numbers.length; i++) {
        sumOfNumbers += numbers[i];
    }

    const average = sumOfNumbers / numbers.length;

    console.log(average.toFixed(2));
}

averageNumber(4, 3, 2, 4, 2);