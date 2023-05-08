function pipesInPool(input) {
    let V = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let N = Number(input[3]);

    let P1forN = P1 * N;
    let P2forN = P2 * N;
    let totalPipesLiters = P1forN + P2forN;

    if (totalPipesLiters <= V) {
        let percentPool = (totalPipesLiters / V) * 100;
        let percentP1 = (P1forN / totalPipesLiters) * 100;
        let percentP2 = (P2forN / totalPipesLiters) * 100;
        console.log(`The pool is ${percentPool.toFixed(2)}% full. Pipe 1: ${percentP1.toFixed(2)}%. Pipe 2: ${percentP2.toFixed(2)}%.`);
    } else if (totalPipesLiters > V) {
        let litersMore = totalPipesLiters - V;
        console.log(`For ${N.toFixed(2)} hours the pool overflows with ${litersMore.toFixed(2)} liters.`);
    }
}

pipesInPool(["100", "100", "100", "10"]);

    //     else {
    //     let litersMore = totalPipesLiters - V;
    //     console.log(`For ${N.toFixed(2)} hours the pool overflows with ${litersMore.toFixed(2)} liters.`);
    // }