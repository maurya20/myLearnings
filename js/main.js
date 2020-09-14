function Me(){
    const name = 'Mukesh'
    const age = 26
    const college = 'GCET'
    document.getElementById('me').innerHTML = (`Hi there! my name is ${name}, I am ${age} years old and my college name was ${college}`)

    console.log(`Hi there! my name is ${name}, I am ${age} years old and my college name was ${college}`)
}
Me();