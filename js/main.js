const cars = [
    {name:'Ford',price:200},
    {name:'Nissan',price:400},
    {name:'Jeep',price:600}
 ]
 template = ''
 const select = document.querySelector('.list')
 const list = cars.map(function(i){
     return {name:i.name, price:i.price*76}
 })
 console.log(list)
 list.forEach(function(x){
    template+= `<h3> The price of ${x.name} car is Rs.${x.price} </h3>`

 })
    
     
 
     
    
 select.insertAdjacentHTML('afterbegin', template)