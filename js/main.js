var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
  }

var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}


var x = person.fullName.apply(person2, ["Oslo", "Norway"]); 
document.getElementById("demo").innerHTML = x;
console.log(x)