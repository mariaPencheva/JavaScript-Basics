function salary(input) {

  let openTabs = Number(input[0]);
  let totalSalary = Number(input[1]);

  for (let i = 2; i <= openTabs + 1; i ++) {
    let nameTab = String(input[i]);
    switch (nameTab) {
      case "Facebook":
        totalSalary -= 150;
        break;
      case "Instagram":
        totalSalary -= 100;
        break;
      case "Reddit":
        totalSalary -= 50;
        break;
        default:
        break;
    }
    // if (totalSalary <= 0) {
    //     console.log(`You have lost your salary.`);
    //   }
  }

  if (totalSalary <= 0) {
    console.log(`You have lost your salary.`);
  } else {
    console.log(`${totalSalary}`);
  }

}

salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])

