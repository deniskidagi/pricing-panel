/* define your functions here */

function calculateTotal(price, quantity){
    return parseInt(price) * parseInt(quantity);
}

function outputCartRow(item, total){
    let image = item['product']['filename']
    let title = item['product']['title']
    let price = item['product']['price']
    let quantity = item['quantity']
    total = calculateTotal(price, quantity).toFixed(2)
    

    document.write("<tr>")
    document.write("<td><img src=images/" + image + "></td>")
    document.write("<td>" + title + "</td>" )
    document.write("<td>" + quantity + "</td>" )
    document.write("<td>" + price + "</td>" )
    document.write("<td>" + total + "</td>" )
    document.write("<tr>");
 

}





        
