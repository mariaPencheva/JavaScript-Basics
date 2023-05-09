function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commissions = 0;

    if (0 <= sales && sales <= 500) {
        switch (city) {
            case "Sofia":
                commissions = sales * (5 / 100);
                console.log(commissions.toFixed(2));
                break;
            case "Varna":
                commissions = sales * (4.5 / 100);
                console.log(commissions.toFixed(2));
                break;
            case "Plovdiv":
                commissions = sales * (5.5 / 100);
                console.log(commissions.toFixed(2));
                break;
            default: console.log(`error`);
                break;
        }
    } else if (500 <= sales && sales <= 1000) {
        switch (city) {
            case "Sofia":
                commissions = sales * (7 / 100);
                console.log(commissions.toFixed(2));
                break;
            case "Varna":
                commissions = sales * (7.5 / 100);
                console.log(commissions.toFixed(2));
                break;
            case "Plovdiv":
                commissions = sales * (8 / 100);
                console.log(commissions.toFixed(2));
                break;
            default: console.log(`error`);
                break;
        }    
    } else if (1000 <= sales && sales <= 10000) {
        switch (city) {
            case "Sofia":
                commissions = sales * (8 / 100);
                console.log(commissions.toFixed(2));
                break;
            case "Varna":
                commissions = sales * (10 / 100);
                console.log(commissions.toFixed(2));
                break;
            case "Plovdiv":
                commissions = sales * (12 / 100);
                console.log(commissions.toFixed(2));
                break;
            default: console.log(`error`);
                break;
        }
    } else if (sales > 10000) {
        switch (city) {
            case "Sofia":
                commissions = sales * (12 / 100);
                console.log(commissions.toFixed(2));
                break;
            case "Varna":
                commissions = sales * (13 / 100);
                console.log(commissions.toFixed(2));
                break;
            case "Plovdiv":
                commissions = sales * (14.5 / 100);
                console.log(commissions.toFixed(2));
                break;
            default: console.log(`error`);
                break;
        }
    } else {
        console.log(`error`);
    }
}

tradeCommissions(["Plovdiv",
"499.99"]);