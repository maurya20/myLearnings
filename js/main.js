const products = [
    {name:'Iphone',price:200},
    {name:'Motorola',price:70},
    {name:'Samsung',price:150},
    {name:'Sony',price:98},
    {name:'Windows pone',price:10}
 ]
 let template = ''
 products.forEach(function(x){
     function discount(){
         if(x.price<100){
         return `<span> On sale !! </span>`
         }
         else {
            return `<div> Hurry up !! </div>`
     }
    }
     template+=`<div class="product">
     <h1> ${x.name}</h1>
     ${discount()}
     <strong>Price: $ ${x.price}</strong>
     </div>`
 })

document.body.insertAdjacentHTML("afterbegin", template)