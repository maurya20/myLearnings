var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
function myFunction() {
  var y = document.forms["select"];
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}
