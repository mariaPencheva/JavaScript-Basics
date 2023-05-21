    function sequence2kPlus1(input){
        let number = Number(input[0]); //n
        let counter = 1;

        while(counter <= number){
            console.log(counter);
            counter = counter * 2 + 1;
        }
        //console.log(counter);
    }

sequence2kPlus1(["1"]);