function building(input) {
    let floor = Number(input[0]);
    let room = Number(input[1]);

    for (let i = floor; i > 0; i--) {
        
        let buff = ``;

        for (let j = 0; j < room; j++) {

            if (i === floor) {
                buff += `L${i}${j} `;
            } else if (i % 2 === 0) {
                buff += `O${i}${j} `;
            } else {
                buff += `A${i}${j} `;
            }

        }

        console.log(buff);
    }


}

building(["6", "4"]);