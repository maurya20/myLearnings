class Company {
  constructor(){
  this.name = "Ambition"
  this.venue = "Rohini"
  
}
}

class Product extends Company{
  constructor(){
    super()
    this.eda = "EDwinXP"
    this.use = "PCB Designing tOOl"
  }
}

const product = new Product()
console.log(product)