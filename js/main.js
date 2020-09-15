const purchase = [
    {quantity:2, amount:100},
    {quantity:5, amount:100},
    {quantity:10, amount:100}
]
let total = 0
purchase.forEach(function(item){
    total+= item.quantity*item.amount
})
console.log(total)
document.querySelector(".list").innerHTML = `Total price for your purchase is Rs. ${total}`