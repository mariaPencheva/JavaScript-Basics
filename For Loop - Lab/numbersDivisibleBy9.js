function numbersDivisibleBy9(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);

    let sum = 0;

    for(let n = start; n <= end; n++){
        if(n % 9 === 0) {
            sum += n;        
        }
    }

    console.log(`The sum: ${sum}`);

    for(let num = start; num <= end; num++){
        if(num % 9 === 0) {
            console.log(num);         
        }
        
    }

}
numbersDivisibleBy9(["100", "200"]);