function characterSequence(input) {

    let text = input[0];
    let inputL = text.length;

    for (let index = 0; index < inputL; index++) {
        console.log(text[index]);
    }
}
characterSequence(["Hi Mimi"]);