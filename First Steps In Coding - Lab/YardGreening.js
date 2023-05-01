function yardGreening()
{
  let squareMetres = 150;
  let pricePerM = 7.61;
  let discount = 0.18;

let priceNoDiscount = squareMetres * pricePerM;
let discountPrice = priceNoDiscount * discount;
let priceWithDiscount = priceNoDiscount - discountPrice; 

console.log(`The final price is: ${priceWithDiscount} lv.`) 
console.log(`The discount is: ${discountPrice} lv.`)

}

yardGreening();