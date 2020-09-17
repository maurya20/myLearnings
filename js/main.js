//We want to run a function that greets the user by his name, but if the name is not provided we want to show a default name.
const greeting = (name= 'user') => {
    return 'Hello '+ name;
 }
 console.log(greeting())