 let ps =  document.getElementsByTagName('p')
for (let i=0; i<ps.length; i++){
    ps[i].addEventListener('click', function(){
        console.log('You clicked p#'+(i+1))
    })
}
