var myclock = setInterval(myFunction, 1000);
function myFunction() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
