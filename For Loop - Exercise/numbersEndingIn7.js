function numbersEndingIn7(input){
    for (let num = 1; num <= 1000; num ++){
        if(num % 10 === 7) {
            console.log(num);
        }
    }
}
numbersEndingIn7();