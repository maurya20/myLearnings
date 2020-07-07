var z = document.getElementById("container");
var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
function myFunction() {
  var y = z.getElementsByTagName("form");
  document.getElementById("demo").innerHTML += y[0].innerHTML;
}
