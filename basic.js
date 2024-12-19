const accountId = 28 //constant declare
let accountEmail = "juikalan@gmail.com" 
var accountPassword = "12345"
accountCity = "thane"
let accountState; //undefined value

// accountId = 2 //not allowed

accountEmail = "jk@dmail.com"
accountPassword = "1223"
accountCity = "pune"

console.log(accountId);
/*
prefer not to use var because of issue in log scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

