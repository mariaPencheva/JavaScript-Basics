function evenPowersOf2(input) {
    let n = Number(input[0]);
    
    for (let i = 0; i <= n; i += 2) {
                console.log(Math.pow(2 , i));
            }
}
evenPowersOf2(["7"]); // tova sa chetnite stepeni  na koito hodi

    // for(let i = 0; i <= n; i ++) { // 0 se priema za chetno chislo
    //     if(i % 2 === 0) {
    //         console.log(i); 
    //     }

//     for(let i = 0; i <= n; i += 2) {
//         console.log(i);
//     }
// }
