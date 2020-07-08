function myFunction() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString() +"  " +d.getMilliseconds();
}
