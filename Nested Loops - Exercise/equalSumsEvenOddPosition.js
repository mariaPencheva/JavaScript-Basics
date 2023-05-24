function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = ``;
    
    for (let currNum = startNum; currNum <= endNum; currNum ++){
        let evenPositionSum = 0;
        let oddPositionSum = 0;

        let currNumAsStr = currNum.toString();

        for(let i = 0; i < currNumAsStr.length; i++){
            let currDigit = Number(currNumAsStr[i]);
            let position = i + 1;
            
            if(position % 2 === 0){
                evenPositionSum += currDigit 
            } else {
                oddPositionSum += currDigit;
            }
        }

        if (evenPositionSum === oddPositionSum){
            result += currNumAsStr + " ";
        }
    }

    console.log(result);

}

equalSumsEvenOddPosition(["100000", "100050"]);
