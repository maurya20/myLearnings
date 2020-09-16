const remainingBalance = 200
const channels = [
    {name:'HBO',rent:100},
    {name:'LIFE',rent:100},
    {name:'Max',rent:700},
    {name:'Cooking channel',rent:300},
    {name:'WOBI',rent:160}
 ];
const result = channels.reduce(function(sum, name){
    return sum+ name.rent}, remainingBalance)

console.log(result)