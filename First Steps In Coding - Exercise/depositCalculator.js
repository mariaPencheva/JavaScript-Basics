// 1.	Депозирана сума – реално число в интервала [100.00 … 10000.00]
// 2.	Срок на депозита (в месеци) – цяло число в интервала [1…12]
// 3.	Годишен лихвен процент – реално число в интервала [0.00 …100.00]

function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let depositPeriodSum = Number(input[1]);
    let annualInterestPercent = Number(input[2]);

    let annualInterestDecimal = annualInterestPercent / 100; 

    let finalSum = depositSum + depositPeriodSum * ((depositSum * annualInterestDecimal) / 12);

    console.log(finalSum);

} 

depositCalculator(["200","3","5.7"]);