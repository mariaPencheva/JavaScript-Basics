function easterShop(input) {
    let index = 0;
    let eggsInShop = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let buyOrFill = "";
    let numOfEggsBuyOrFill = 0;
    let soldEggs = 0;

    while(command !== "Close"){

        buyOrFill = command;
        numOfEggsBuyOrFill = Number(input[index]);
        index++;

        if(buyOrFill === "Buy" && eggsInShop < numOfEggsBuyOrFill){
            break;
        }
         
        if(buyOrFill === "Buy"){
            eggsInShop -= numOfEggsBuyOrFill;
            soldEggs += numOfEggsBuyOrFill;
        } else if (buyOrFill === "Fill"){
            eggsInShop += numOfEggsBuyOrFill;
        }

        command = input[index];
        index++;
    }

    if(command === "Close"){
        console.log(`Store is closed!`);
        console.log(`${soldEggs} eggs sold.`);
    } else if (buyOrFill === "Buy" && eggsInShop < numOfEggsBuyOrFill){
        console.log(`Not enough eggs in store!`);
        console.log(`You can buy only ${eggsInShop}.`);
    }

}

easterShop([
    "20",
    "Fill",
    "30",
    "Buy",
    "15",
    "Buy",
    "20",
    "Close"
])