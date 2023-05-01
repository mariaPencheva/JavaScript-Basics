function concatenateData () 
{

 let firstName = "Maria";
 let lastName = "Pencheva";
 let age = 25;
 let town = "Varna";

console.log(`I am ${firstName} ${lastName}, a ${age} years old girl from ${town}. :)`)

}

concatenateData();

//judge
function concatenateData (input) {
    let firstName = String(input[0]);
    let lastName = String(input[1]);
    let age = Number(input[2]);
    let town = String(input[3]);
   
   console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
   
   }