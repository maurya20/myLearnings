const url = 'http://jsonplaceholder097yh.typicode.com/posts/1'
fetch(url)
.then(response=>response.json())
.then(data=> console.log(data))
.catch(error => console.log("What the helll is this crap", error))

