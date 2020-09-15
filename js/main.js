const paintings = [
    {name:'Mona lisa',width:200,height:200},
    {name:'The scream',width:400,height:600},
    {name:'The last supper',width:600,height:700}
 ]
 const list = paintings.map(function(i){
     return i.name
 })
 console.log(list)
 list.forEach(function(name){
     const select = document.querySelector('select')
     select.insertAdjacentHTML('afterbegin', `<option value='${name}'>${name}</option>`)
 })