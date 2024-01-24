
// const tax_rate = prompt('Enter tax rate (0.10)');
// const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

function calcSubTotal(cart){
   let subTotal = 0
   for (let item of cart){
      let price = item['product']['price'];
      let quantity = item['quantity'];
      subTotal += parseInt(price * quantity)
   }
   return subTotal;
}
  
function calculateTax(){
   let subTotal = calcSubTotal(cart);
   let tax = 0.10 * subTotal;
   return tax;
}

function calcShip(){
   let shipping_cost = 0;
   if(calcSubTotal(cart) < 1000){
      shipping_cost = 40
   }else{
      shipping_cost = 0;
   }
   return shipping_cost;
   
}

function grandTotal(){
   return calcSubTotal(cart) + calculateTax() + calcShip()
}