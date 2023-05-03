// 1.   Брой страници в текущата книга – цяло число в интервала [1…1000]
// 2.	Страници, които прочита за 1 час – цяло число в интервала [1…1000]
// 3.	Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]

function vacBookList(input) {
 let bookPages = Number(input[0]);
 let pagesPerHour = Number(input[1]);
 let readDays = Number(input[2]);
 
 let totalHours = bookPages / pagesPerHour;
 let hoursPerDay = totalHours / readDays;
// let readHoursPerDay = (bookPages/pagesPerHour) / readDays;

 console.log(hoursPerDay);
}

vacBookList(["432","15","4"]);