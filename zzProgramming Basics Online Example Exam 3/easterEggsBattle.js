function easterEggsBattle(input) {
    let index = 0;
    let firstPlayerEggs = Number(input[index]);
    index++;

    let secPlayerEggs = Number(input[index]);;
    index++;

    let command = input[index];
    index++;

    while(command !== "End") {

        if(firstPlayerEggs === 0 || secPlayerEggs === 0){
            break;
        }

        if(command === "one"){
            secPlayerEggs -= 1;
        } else if (command === "two"){
            firstPlayerEggs -= 1;
        }

        command = input[index];
        index++;
    }


    if(firstPlayerEggs === 0){
        console.log(`Player one is out of eggs. Player two has ${secPlayerEggs} eggs left.`);
    } else if (secPlayerEggs === 0){
        console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);
    } else if (command === "End"){
        console.log(`Player one has ${firstPlayerEggs} eggs left.`)
        console.log(`Player two has ${secPlayerEggs} eggs left.`);
    }


}

easterEggsBattle([
    "2",
    "6",
    "one",
    "two",
    "two"
    
]);