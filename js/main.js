const arr = [1, 2, 3, 4]
const newArray = arr.map(function(i){
    return i*10
})
console.log(newArray)
document.querySelector('.product').innerHTML=newArray[2]