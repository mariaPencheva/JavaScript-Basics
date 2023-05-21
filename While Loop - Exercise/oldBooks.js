function oldBooks(input) {
    let index = 0;

    let searchedBook = input[index];
    index++;

    let currBook = input[index];
    index++;

    let isFound = false;
    let booksChecked = 0;

    while (currBook !== "No More Books"){

        if(currBook === searchedBook){
            isFound = true;
            break;
        }

        booksChecked++;
        currBook = input[index];
        index++;
    }

        if(isFound) {
            console.log(`You checked ${booksChecked} books and found it.`);
        } else {
            console.log("The book you search is not here!");
            console.log(`You checked ${booksChecked} books.`);
        }
}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])

