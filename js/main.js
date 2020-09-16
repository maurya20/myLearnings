const products = [
    {name:"RedMi Note8", category:"Mobile"},
    {name:"MiTV", category:"TV"},
    {name:"RedMi k10", category:"Mobile"},
    {name:"Lg 56", category:"TV"},
    {name:"I phoneXII", category:"Mobile"}
]
const result = products.filter(function(x){
    return x.category === "Mobile"
})
console.log(result)