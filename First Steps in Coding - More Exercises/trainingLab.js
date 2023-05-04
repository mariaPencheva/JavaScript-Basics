// Учебна зала има правоъгълен размер w на h метра,
// без колони във вътрешността си. Залата е разделена на две части
// – лява и дясна, с коридор приблизително по средата.
// В лявата и в дясната част има редици с бюра. В задната част на залата има
// голяма входна врата. В предната част на залата има катедра с подиум за преподавателя.
// Едно работно място заема 70 на 120 cm (маса с размер 70 на 40 cm + място за стол и
// преминаване с размер 70 на 80 cm). Коридорът е широк поне 100 cm.
// Изчислено е, че заради входната врата (която е с отвор 160 cm) се губи точно 1 работно място,
// а заради катедрата (която е с размер 160 на 120 cm) се губят точно 2 работни места.
// Напишете програма, която въвежда размери на учебната зала и изчислява броя работни места
// в нея при описаното разположение (вж. фигурата).

// input: четат se 2 числа, по едно на ред: w (дължина в метри) и h (широчина в метри).
// Ограничения->  3 ≤ h ≤ w ≤ 100.

// output: броят места в учебната зала

// function trainingLab(input) {
//     let w = Number(input[0]);
//     let h = Number(input[1]);

//     let wInCm = w * 100;
//     let hInCm = h * 100;

//     let rows = wInCm / 120;
//     let columns = (hInCm - 100) / 70;

//     let seats = (rows * columns) - 3;

//     console.log(Math.trunc(seats));

// }

// trainingLab(["8.4","5.2"]);

// function inputHall([width, len]) {
//     let rows = ~~(width * 100 / 120)
//     let desk = ~~((len * 100 - 100) / 70)
//     let allPlace = rows * desk - 3
//     console.log(allPlace);
//   }
//   inputHall([15, 8.9]);

// function trainingLab(input) {
//   let width = Number(input[0]);
//   let len = Number(input[1]);
//   let rows = Math.trunc(width * 100 / 120)
//   let desk = Math.trunc(((len * 100) - 100) / 70)
//   let allPlaces = rows * desk - 3
//   console.log(allPlaces)
// }
// trainingLab([15, 8.9]);

// Площта се превръща в сантиметри,  вади се коридора, после се изчисляват редовете и бюрото.
// Накрая от резултата се махат три места където е вратата. Общо взето математически глупости.
// Това с Math.trunc маха дробният остатък, може да се ползват и други прийоми  като:  parseInt(),
// побитови оператори | ,  <<  и т.н. , ама ти се придържай към материала от уроците.
// Иначе ето ти пример за аналогично решение на задачата  TrainingLab с използването на побитов оператор.😆
// -->  ([w, h]) => (w * 100 / 120 | 0) * (((h * 100) - 100) / 70 | 0) - 3

function trainingLab(input) {
  let length = Number(input[0]) * 100;
  let width = Number(input[1]) * 100;

  let workplaceLength = 70;
  let workplaceWidth = 120;

  let hallWidthWorkplaces = Math.floor((width - 100) / workplaceLength);

  let hallLengthWorkplaces = Math.floor(length / workplaceWidth);

  let workplacesCount = hallWidthWorkplaces * hallLengthWorkplaces - 3;

  console.log(workplacesCount);
}

trainingLab(["8.4", "5.2"]);