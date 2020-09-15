const list = document.querySelector('.list')
function addUser(firstName, lastName){
    const template= `
    <div class="user">
    <p>${firstName} ${lastName} </p>
    </div>
    `
    list.insertAdjacentHTML('beforeend', template)
}
addUser("Mukesh","Maurya")
addUser("Mukesh","Maurya")
addUser("Banti ","Maurya")